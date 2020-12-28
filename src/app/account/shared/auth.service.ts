import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { Observable ,  of } from 'rxjs';
import { take ,  takeUntil ,  switchMap, map } from 'rxjs/operators';

import { MessageService } from '../../messages/message.service';
import { User, Roles } from '../../models/user.model';

@Injectable()
export class AuthService {
  public user: Observable<User>;

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private messageService: MessageService
  ) {
    this.user = this.afAuth.authState
      .pipe(
        switchMap((auth) => {
          if (auth) {
            return this.db.object('users/' + auth.uid).valueChanges()
              .pipe(
                map((user: any) => {
                  return {
                    ...user,
                    uid: auth.uid
                  };
                })
              );
          } else {
            return of(null);
          }
        })
      );
  }

  public googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    return this.afAuth.auth.signInWithPopup(provider).then(
      (credential :any) => {
        this.updateNewUser(credential.user);
      },
      (error:any) => {
        throw error;
      }
    );
  }

  public emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(
        (user:any) => {
          this.updateNewUser(user);
        },
        (error:any) => {
          throw error;
        }
      );
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      (user:any) => {
        this.updateNewUser(user);
      },
      (error:any) => {
        throw error;
      }
    );
  }

  public signOut() {
    this.afAuth.auth.signOut();
    this.messageService.add('You have been logged out.');
  }

  public updateProfile(userData: User) {
    this.updateExistingUser(userData);
    this.messageService.add('User profile has been updated!');
  }

  public updatePassword(password: string) {
    return this.afAuth.auth.currentUser
      ?.updatePassword(password)
      .then(() => {
        this.messageService.add('Password has been updated!');
      })
      .catch(function(error:any) {
        throw error;
      });
  }

  public updateEmail(email: string) {
    return this.afAuth.auth.currentUser
      ?.updateEmail(email)
      .then(() => {
        this.updateExistingUser({ email: email });
        this.messageService.add('User email have been updated!');
      })
      .catch(function(error:any) {
        throw error;
      });
  }

  private updateNewUser(authData:any) {
    const userData = new User(authData);
    const ref = this.db.object('users/' + authData.uid);
    ref
      .valueChanges()
      .pipe(
        take(1)
      )
      .subscribe((user) => {
        if (!user) {
          ref.update(userData);
        }
      });
  }

  private updateExistingUser(userData:any) {
    const currentUser = this.afAuth.auth.currentUser;
    const ref = this.db.object('users/' + currentUser?.uid);
    ref
      .valueChanges()
      .pipe(
        take(1)
      )
      .subscribe((user) => {
        ref.update(userData);
      });
  }
}

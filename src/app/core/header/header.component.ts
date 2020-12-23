import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private authSubscription: Subscription = new Subscription();
  public user: User = new User(null);
  public showSearch = true;

  constructor() { }

  ngOnInit() {

  }

  public onLogOut(e: Event) {

  }

  public onMenuToggle(e: Event) {

  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}

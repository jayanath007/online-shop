import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { OffcanvasService } from './core/offcanvas.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AccountModule } from './account/account.module';
import { AuthService } from './account/shared/auth.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MessageService } from './messages/message.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ProductsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AccountModule,
  ],
  providers: [OffcanvasService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { AccountComponent } from './account.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        AccountComponent,
        ProfileComponent,
        OrdersComponent,
        RegisterLoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    exports: [
        
    ]
})
export class AccountModule {}

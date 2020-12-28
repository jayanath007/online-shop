import { MessageService } from './../messages/message.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMainComponent } from './navigation-main/navigation-main.component';
import { NavigationOffCanvasComponent } from './navigation-off-canvas/navigation-off-canvas.component';
import { AuthService } from '../account/shared/auth.service';
import { OrderService } from '../account/orders/shared/order.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        ContentComponent,
        FooterComponent,
        HeaderComponent,
        NavigationMainComponent,
        NavigationOffCanvasComponent,
    ],
    exports: [
        CommonModule,
        ContentComponent,
        FooterComponent,
        HeaderComponent,
        NavigationOffCanvasComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxNavbarModule,
        ToastrModule.forRoot(),
    ],
    providers: [
        MessageService,
        OrderService,
        AuthService,
    ]
})
export class CoreModule {

}

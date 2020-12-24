import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationMainComponent } from './navigation-main/navigation-main.component';

@NgModule({
    declarations: [
        ContentComponent,
        FooterComponent,
        HeaderComponent,
        NavigationMainComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgxNavbarModule
    ],
    exports: [
        CommonModule,
        ContentComponent,
        FooterComponent,
        HeaderComponent,
    ],
    providers: [
    ]
})
export class CoreModule {

}

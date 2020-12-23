import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        ContentComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule 
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

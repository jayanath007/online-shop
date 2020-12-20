import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    declarations: [
        ContentComponent,
        FooterComponent
,
    ],
    imports: [
        CommonModule,
        AppRoutingModule 
    ],
    exports: [
        CommonModule,
        ContentComponent,
        FooterComponent
    ],
    providers: [
    ]
})
export class CoreModule {

}

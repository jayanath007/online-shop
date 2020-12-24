import { Component } from '@angular/core';
import { OffcanvasService } from './core/offcanvas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public offcanvasService: OffcanvasService) {}
}
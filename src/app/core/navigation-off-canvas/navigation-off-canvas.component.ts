import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffcanvasService } from '../offcanvas.service';

@Component({
  selector: 'app-navigation-off-canvas',
  templateUrl: './navigation-off-canvas.component.html',
  styleUrls: ['./navigation-off-canvas.component.scss']
})
export class NavigationOffCanvasComponent implements OnInit, OnDestroy {

  constructor(
    public offcanvasService: OffcanvasService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  public onLogout(e: Event) {
    this.offcanvasService.closeOffcanvasNavigation();
    this.router.navigate(['/register-login']);
    e.preventDefault();
  }

  public onNavigationClick() {
    this.offcanvasService.closeOffcanvasNavigation();
  }

  ngOnDestroy() {
  }
}

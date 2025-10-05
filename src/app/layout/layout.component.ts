import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Theme, ThemeService } from '../services/theme.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoute, routes } from '../app.routes';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule, RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('drawer') 
  drawer?: MatSidenav;

  connected: boolean = true;

  appRoutes: AppRoute[] = routes;

  countries = [
    { code: 'fr', label: 'French', img: 'france-flag.webp' },
    { code: 'de', label: 'German', img: 'germany-flag.webp' },
    { code: 'it', label: 'Italian', img: 'italy-flag.webp' }
  ]

  private readonly themeService = inject(ThemeService);

  currentTheme = this.themeService.getCurrentTheme();

  ngOnInit(): void {
    this.themeService.setTheme(this.currentTheme());
  }

  switchTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }

  toggleSidenav() {
    this.drawer?.toggle();
  }
}

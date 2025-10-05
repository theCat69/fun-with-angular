import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CONFIG } from '../../main';
import { Config } from '../../models/config';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  navItems = [
    'Home',
    'Explore',
    'Components',
    'Templates',
    'About'
  ];
  // Provide a simple items array for the template to iterate over
  items = Array.from({ length: 30 }, (_, i) => i + 1);
  @ViewChild('drawer') drawer?: MatSidenav;

  config: Config = inject(CONFIG);

  connected: boolean = true;

  countries = [
    { code: 'fr', label: 'French', img: 'france-flag.webp' },
    { code: 'de', label: 'German', img: 'germany-flag.webp' },
    { code: 'it', label: 'Italian', img: 'italy-flag.webp' }
  ]

  toggleSidenav() {
    this.drawer?.toggle();
  }
}

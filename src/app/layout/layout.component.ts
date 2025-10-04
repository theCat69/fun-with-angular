import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CONFIG } from '../../main';
import { Config } from '../../models/config';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule],
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

  toggleSidenav() {
    this.drawer?.toggle();
  }
}

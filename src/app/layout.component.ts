import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule],
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
}

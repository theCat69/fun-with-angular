import { Component, inject } from '@angular/core';
import { Config } from '../../../models/config';
import { CONFIG } from '../../../main';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  config: Config = inject(CONFIG);
  // Provide a simple items array for the template to iterate over
  items = Array.from({ length: 30 }, (_, i) => i + 1);
}

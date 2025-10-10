import { Route } from '@angular/router';
import { Home } from './pages/home/home';
import { Explore } from './pages/explore/explore';
import { Templates } from './pages/templates/templates';
import { MatChip } from './pages/mat-chip/mat-chip';

export interface AppRoute extends Route {
  title: string;
  icon: string;
}

export const routes: AppRoute[] = [
  { path: '', component: Home, title: 'Home', icon: 'home' },
  { path: 'explore', component: Explore, title: 'Explore', icon: 'explore' },
  { path: 'components', component: MatChip, title: 'Components', icon: 'widgets' },
  { path: 'templates', component: Templates, title: 'Templates', icon: 'view_quilt' },
  { path: 'about', component: Explore, title: 'About', icon: 'info' },
];

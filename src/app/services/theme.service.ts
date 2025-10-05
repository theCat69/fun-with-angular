import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme: WritableSignal<Theme> = signal('light')

  public setTheme(theme: Theme) {
    this.applyTheme(theme);
  }

  public getCurrentTheme(): Signal<Theme> {
    return this.currentTheme;
  }

  private applyTheme(theme: Theme) {
    const body = document.body;

    body.classList.remove('light-theme', 'dark-theme');

    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else if (theme === 'light') {
      body.classList.add('light-theme');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      body.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
    }

    this.currentTheme.set(theme);
  } 
}

export type Theme = 'light' | 'dark' | 'system';

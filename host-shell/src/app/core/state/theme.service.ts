import { Injectable } from '@angular/core';

import { ThemeMode } from './models/theme.model';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    applyTheme(theme: ThemeMode): void {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`);
        localStorage.setItem('theme', theme);
    }

    getStoredTheme():
        ThemeMode {
        return (localStorage.getItem('theme') as ThemeMode) || 'light';
    }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { AuthService } from '../../core/auth/services/auth.service';
import { AppStateService } from '../../core/state/app-state.service';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  constructor(public authService: AuthService, private router: Router, protected appState: AppStateService) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleTheme(): void {
    const nextTheme = this.appState.theme() === 'light' ? 'dark' : 'light';
    this.appState.setTheme(nextTheme);
  }
}
import { Component, inject } from '@angular/core';
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

  protected appState = inject(AppStateService);

  constructor(public authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
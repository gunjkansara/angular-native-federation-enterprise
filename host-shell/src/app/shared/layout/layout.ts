import { Component, inject } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Sidebar } from '../sidebar/sidebar';
import { Footer } from '../footer/footer';

import { Loading } from '../components/loading/loading';
import { AppStateService } from '../../core/state/app-state.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, Navbar, Sidebar, Footer, Loading],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
  protected appState = inject(AppStateService);
}

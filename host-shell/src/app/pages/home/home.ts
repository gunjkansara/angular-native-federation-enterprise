import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DemoApiService } from '../../core/auth/services/demo-api.service';
import { AppStateService } from '../../core/state/app-state.service';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  private appState = inject(AppStateService);

  constructor(private apiService: DemoApiService) {
    this.appState.setLoading(true);

    setTimeout(() => {
      this.appState.setLoading(false);
    }, 3000);

  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(console.log);
  }

}

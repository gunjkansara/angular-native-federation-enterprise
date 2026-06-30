import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DemoApiService } from '../../core/auth/services/demo-api.service';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  constructor(private apiService: DemoApiService) {

  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe(console.log);
  }

}

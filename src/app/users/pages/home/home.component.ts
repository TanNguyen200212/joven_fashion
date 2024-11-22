import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CareusolComponent } from 'src/app/core/layout/careusol/careusol.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    CareusolComponent,
  
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

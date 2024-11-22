import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CareusolComponent } from 'src/app/core/layout/careusol/careusol.component';
import { UtilitySectionComponent } from "../../../core/layout/utility-section/utility-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    CareusolComponent, UtilitySectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { HeaderUsComponent } from "./core/layout/header-us/header-us.component";
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterUsComponent } from './core/layout/footer-us/footer-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    HeaderUsComponent,
    FooterUsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joven_fashion';
}

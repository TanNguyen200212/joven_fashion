import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderUsComponent } from '../core/layout/header-us/header-us.component';
import { FooterUsComponent } from '../core/layout/footer-us/footer-us.component';
import { CareusolComponent } from "../core/layout/careusol/careusol.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderUsComponent,
    FooterUsComponent,
    CareusolComponent,
    HomeComponent
],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

}

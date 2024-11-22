import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderUsComponent } from '../core/layout/header-us/header-us.component';
import { FooterUsComponent } from '../core/layout/footer-us/footer-us.component';
import { NewArrivalComponent } from "./pages/new-arrival/new-arrival.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderUsComponent,
    FooterUsComponent,
    NewArrivalComponent
],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

}

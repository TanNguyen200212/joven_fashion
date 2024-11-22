import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-us',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header-us.component.html',
  styleUrls: ['./header-us.component.css']
})
export class HeaderUsComponent {

}

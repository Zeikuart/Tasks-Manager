import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { navItems } from '../nav-data';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NavItemComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  navItems = navItems

}

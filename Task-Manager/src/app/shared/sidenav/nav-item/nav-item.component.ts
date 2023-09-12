import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {

  // Getting the route from nav
  @Input() routerLink: string = ""
  // Getting the nav item
  @Input() item!: { 
    title: string
    icon: string
    link: string
    isActive: boolean
  }

}

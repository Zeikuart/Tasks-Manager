import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from '../nav-item/nav-item.component';
import { navItems } from '../nav-data';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, NavItemComponent],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  desktop:boolean = true
  navItems = navItems

  constructor(private readonly sidenav: SidenavService) {}

  // Get Trigger Value
  public get sideNavState() {
    return this.sidenav.trigger
  }
  // Close SideNav
  public closeSideNav(): void {
    this.sidenav.trigger = false
  }
}

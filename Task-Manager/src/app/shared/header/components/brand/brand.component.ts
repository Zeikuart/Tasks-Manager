import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  constructor(private readonly sidenav: SidenavService) {

  }

  // Side Navigation Toggler
  public toggleSideNav(): void {
    console.log('Click!')
    this.sidenav.trigger = !this.sidenav.trigger;
  }

}

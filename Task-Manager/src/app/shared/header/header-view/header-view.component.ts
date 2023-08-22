import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from '../components/brand/brand.component';
import { InputComponent } from '../components/input/input.component';
import { CtaComponent } from '../components/cta/cta.component';

@Component({
  selector: 'app-header-view',
  standalone: true,
  imports: [CommonModule, BrandComponent, InputComponent, CtaComponent],
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.css']
})
export class HeaderViewComponent {

}

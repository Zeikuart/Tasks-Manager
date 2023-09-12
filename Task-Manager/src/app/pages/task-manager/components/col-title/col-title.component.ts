import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-col-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './col-title.component.html'
})
export class ColTitleComponent {

  @Input() item!: {
    title: string
    value: number
    isActive: boolean
  }
}

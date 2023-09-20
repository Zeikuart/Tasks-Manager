import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColTitleComponent } from '../col-title/col-title.component';

@Component({
  selector: 'app-phone-menu',
  standalone: true,
  imports: [CommonModule, ColTitleComponent],
  templateUrl: './phone-menu.component.html'
})
export class PhoneMenuComponent {

  // Getting the menu tiem
  @Input() menuItems!: {
    title: string
    value: number
    isActive: boolean
  }[]

  // Sending option clicked!
  @Output() selectedOptionMenu = new EventEmitter<{ menuOption: string, menuIndex: number }>()

  selectedOption(option:string, index:number) {

    console.log("Selected :", option, index)

    const data = { menuOption: option, menuIndex: index }
    // Sending index
    this.selectedOptionMenu.emit(data)
  }
}

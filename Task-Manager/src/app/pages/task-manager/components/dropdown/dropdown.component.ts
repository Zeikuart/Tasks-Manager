import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownService } from 'src/app/services/dropdown/dropdown.service';
import { dropdownItems } from './dropdownData';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {

  @Input() category: string = ""
  
  dropdownItems = dropdownItems
  isOpen = false
  isSubOpen = false

  constructor(public dropdownService: DropdownService) {}

  move():void {}

  // Open Dropdown
  triggerDropdown() {

    console.log("Task: ", this)

    if(!this.isOpen) {
      this.dropdownService.closeAllDropdowns()
      this.isOpen = true;
      return
    }
    this.isOpen = false;
  }

  // Open SubDropdown
  action(index: number):void {

    if(index === 2){
      this.isSubOpen = !this.isSubOpen
    }
  }

}

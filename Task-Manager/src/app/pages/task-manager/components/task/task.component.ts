import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskMenuComponentDirective } from 'src/app/directives/task-menu-component.directive';
import { DropdownService } from 'src/app/services/dropdown/dropdown.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, TaskMenuComponentDirective, DropdownComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  // Ref to Dropdown
  @ViewChild('dropdown') dropDownComponent!: DropdownComponent

  @Input() task!: {
    id: number
    cat: string
    taskName: string
    tag: {
      hasTag: boolean
      tagName: string
      tagColor: string
      tagBackground: string
    }
    progress: string
    date: string
  }

  constructor(private dropdownService: DropdownService) {}

  ngOnInit(): void {
    // Add references to service list
    this.dropdownService.addMenu(this)
  }

  closeDropdown() {
    this.dropDownComponent.isOpen = this.dropDownComponent.isSubOpen = false
  }

}

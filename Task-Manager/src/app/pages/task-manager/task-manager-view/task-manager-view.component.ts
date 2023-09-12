import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { menuItems, tasksList } from '../task-data';
import { PhoneMenuComponent } from '../components/phone-menu/phone-menu.component';
import { TaskColComponent } from '../components/task-col/task-col.component';

@Component({
  selector: 'app-task-manager-view',
  standalone: true,
  imports: [CommonModule, PhoneMenuComponent, TaskColComponent],
  templateUrl: './task-manager-view.component.html',
  styleUrls: ['./task-manager-view.component.css']
})
export class TaskManagerViewComponent {

  menuItems = menuItems
  tasksList = tasksList
}

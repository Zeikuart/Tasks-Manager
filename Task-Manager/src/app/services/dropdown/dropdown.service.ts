import { Injectable } from '@angular/core';
import { TaskComponent } from 'src/app/pages/task-manager/components/task/task.component';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private openMenus: TaskComponent[] = []
  constructor() { }

  addMenu(component: TaskComponent) {

    const isDuplicate = this.openMenus.some(menu => menu.task.taskName === component.task.taskName);

    if (!isDuplicate) {
      this.openMenus.push(component);
      console.log("Instances: ", this.openMenus);
    }

  }
  // Remove a task from the reference list
  closeMenu(component: TaskComponent) {
    const index = this.openMenus.indexOf(component);
    if (index !== -1) {
      this.openMenus.splice(index, 1);
    }
  }

  // Closes all the dropdowns
  closeAllDropdowns() {
    for (const menu of this.openMenus) {
      menu.closeDropdown()
    }
  }

  // Clean reference list
  emptyMenus(): void{
    this.openMenus = [];
  }
}

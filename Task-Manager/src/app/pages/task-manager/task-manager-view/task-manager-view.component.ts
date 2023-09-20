import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { menuItems, tasksList} from '../task-data';
import { PhoneMenuComponent } from '../components/phone-menu/phone-menu.component';
import { TaskColComponent } from '../components/task-col/task-col.component';
import { DynamicComponentDirective } from 'src/app/directives/dynamic-component.directive';

@Component({
  selector: 'app-task-manager-view',
  standalone: true,
  imports: [CommonModule, PhoneMenuComponent, TaskColComponent, DynamicComponentDirective],
  templateUrl: './task-manager-view.component.html',
  styleUrls: ['./task-manager-view.component.css']
})
export class TaskManagerViewComponent implements AfterViewInit {

  @ViewChild(DynamicComponentDirective) dynamic!: DynamicComponentDirective

  menuItems = menuItems
  tasksList = tasksList

  tasks!: {
    taskName: string
    tag: {
      hasTag: boolean
      tagName: string
      tagColor: string
      tagBackground: string
    }
    progress: string
    date: string
  }[]

  constructor(private cd:ChangeDetectorRef) {}

  ngOnInit(): void {
    // Do http request here
    this.tasks = this.tasksList.backLog
    console.log("List: ", this.tasks)

  }

  ngAfterViewInit(): void {
    
    // If stays here, use detect changes, otherwise, refactor it inside ngOnInit()
    this.loadColComponent()
    this.cd.detectChanges()
    
  }

  // Render column to be used in phone view
  loadColComponent(data: { menuOption: string, menuIndex: number } = { menuOption: "backLog", menuIndex: 0 }) {
    console.log("Getting this: ", data)

    const viewContainerRef = this.dynamic.viewContainerRef
    viewContainerRef.clear()

    const componentRef = viewContainerRef.createComponent<TaskColComponent>(TaskColComponent)

    switch (data.menuOption) {
      case "backLog":
        componentRef.instance.tasks = this.tasksList.backLog;
        this.menuItems.forEach((item, index) => {
          item.isActive = index === data.menuIndex
        })
        break;

      case "inProgress":
        componentRef.instance.tasks = this.tasksList.inProgress;
        this.menuItems.forEach((item, index) => {
          item.isActive = index === data.menuIndex
        })
        break;

      case "done":
        componentRef.instance.tasks = this.tasksList.done;
        this.menuItems.forEach((item, index) => {
          item.isActive = index === data.menuIndex
        })
        break;

      default:
        componentRef.instance.tasks = this.tasksList.backLog;
        this.menuItems.forEach((item, index) => {
          item.isActive = index === data.menuIndex
        })
        break;
    }
  }
}



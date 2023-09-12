import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskBtnComponent } from '../new-task-btn/new-task-btn.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-col',
  standalone: true,
  imports: [CommonModule, NewTaskBtnComponent, TaskComponent],
  templateUrl: './task-col.component.html'
})
export class TaskColComponent {

  @Input() tasksList!: {
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
}

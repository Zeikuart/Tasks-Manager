import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task!: {
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
}

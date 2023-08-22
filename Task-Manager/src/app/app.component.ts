import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskManagerViewComponent } from './pages/task-manager/task-manager-view/task-manager-view.component';
import { NavComponent } from './shared/sidenav/nav/nav.component';
import { HeaderViewComponent } from './shared/header/header-view/header-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TaskManagerViewComponent, NavComponent, HeaderViewComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-Manager';
}

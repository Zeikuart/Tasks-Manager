import { Routes } from '@angular/router';

// Routes:
export const routes: Routes = [
    // Default
    {path: '', redirectTo: '/task-manager', pathMatch: 'full'},
    // Task Manager:
    {path: 'task-manager', loadComponent: () => import('./pages/task-manager/task-manager-view/task-manager-view.component').then((m) => m.TaskManagerViewComponent)},
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'task-form', component: TaskFormComponent },
  { path: 'register', component: RegisterComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

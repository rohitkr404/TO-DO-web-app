import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material.module';
import { Task } from '../../models/task.model';
import { UserService } from '../../services/user.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  updatingTask: Task | undefined;

  constructor(private userService: UserService,private dialog: MatDialog) { }

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    const userId = currentUser ? JSON.parse(currentUser).id : '';

    this.userService.getTasksForUser(userId)
      .subscribe(tasks => this.tasks = tasks);
    
    this.userService.taskListUpdated.subscribe(() => {
      this.userService.getTasksForUser(userId).subscribe(tasks => {
        this.tasks = tasks;
      });
    });

  }

  openTaskForm(task?: Task): void {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: task
    });

    dialogRef.afterClosed().subscribe((result: Task) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  updateTask(task: Task) {
    this.userService.updateTask(task).subscribe(updatedTask => {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      this.tasks[index] = updatedTask;
    });
  }
  
  deleteTask(task: Task) {
    this.userService.deleteTask(task).subscribe(res => {
      this.userService.taskListUpdated.next();
    });
  }
  
}

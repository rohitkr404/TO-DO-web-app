import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {
  @Input() task: Task =  new Task();
  taskForm: FormGroup;
  isUpdateTask: boolean = false;
  
  constructor(private userService: UserService,private formBuilder: FormBuilder, public dialogRef: MatDialogRef<TaskFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Task) {
      if(data){
        this.task = data;
        this.isUpdateTask = true;
      }
      else{
        this.isUpdateTask = false;
      }
      
    this.taskForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      completed: [false]
    });
  }
  
  ngOnInit() {
    this.taskForm = new FormGroup({
      id: new FormControl(this.task.id),
      name: new FormControl(this.task.name, Validators.required),
      description: new FormControl(this.task.description),
      dueDate: new FormControl(this.task.dueDate, Validators.required),
      completed: new FormControl(this.task.completed)
    });
  }
  
  onSubmit(): void {
    if(this.isUpdateTask){
      this.userService.updateTask(this.taskForm.value)
      .subscribe(task => {
        console.log('Task created:', task);
        // reset form and show success message
        this.task =  new Task();
        this.userService.taskCreated.next();
      });
    }
    else{
      this.userService.createTask(this.taskForm.value)
      .subscribe(task => {
        console.log('Task created:', task);
        // reset form and show success message
        this.task =  new Task();
        this.userService.taskCreated.next();
      });
    }
    
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  
}

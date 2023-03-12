import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/models/task.model';
import { UserService } from 'src/app/services/user.service';
import { DatePipe, formatDate } from '@angular/common';


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
    @Inject(MAT_DIALOG_DATA) public data: Task, private datePipe: DatePipe) {
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
  
  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      id: [this.task ? this.task.id : ''],
      name: [this.task ? this.task.name : '', Validators.required],
      description: [this.task ? this.task.description : ''],
      completed: [this.task ? this.task.completed : false],
      dueDate: [this.task ? formatDate(this.task.dueDate, 'yyyy-MM-dd', 'en') : '']
    });
}

  
  onSubmit(): void {
    if(this.isUpdateTask){
      this.userService.updateTask(this.taskForm.value)
      .subscribe(task => {
        console.log('Task created:', task);
        // reset form and show success message
        this.task =  new Task();
        this.userService.taskListUpdated.next();
      });
    }
    else{
      this.userService.createTask(this.taskForm.value)
      .subscribe(task => {
        console.log('Task created:', task);
        // reset form and show success message
        this.task =  new Task();
        this.userService.taskListUpdated.next();
      });
    }
    
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = 'http://localhost:8080';
  public taskListUpdated = new Subject<void>();

  constructor(private http: HttpClient) { }

  getTasksForUser(userId: number): Observable<Task[]> {
    const url = `${this.baseUrl}/users/${userId}/tasks`;
    return this.http.get<Task[]>(url);
  }

  createTask(task: Task): Observable<Task> {
    const currentUser = localStorage.getItem('currentUser');
    task.userId = currentUser ? JSON.parse(currentUser).id : '';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${this.baseUrl}/tasks/`;
    return this.http.post<Task>(url, task, httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    const currentUser = localStorage.getItem('currentUser');
    task.userId = currentUser ? JSON.parse(currentUser).id : '';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${this.baseUrl}/tasks/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const currentUser = localStorage.getItem('currentUser');
    task.userId = currentUser ? JSON.parse(currentUser).id : '';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${this.baseUrl}/tasks/${task.id}`;
    return this.http.delete<Task>(url, httpOptions);
  }
  

}

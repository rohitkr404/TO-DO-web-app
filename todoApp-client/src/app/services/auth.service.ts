import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8080'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  login(loginData: Login): Observable<any> {
    const url = `${this.apiUrl}/users/login`;
    return this.http.post(url, loginData);
  }

  // Add other auth related methods like logout, register etc.
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const loginData: Login = Object.assign({}, this.loginForm.value);
    this.authService.login(loginData).subscribe(
      (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigate(['/tasks']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

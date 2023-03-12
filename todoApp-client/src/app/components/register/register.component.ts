import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    const registerData = Object.assign({}, this.registerForm.value);
    this.authService.register(registerData).subscribe(
      (data) => {
        console.log('User registered successfully!');
        this.router.navigate(['/login']);
        // Redirect the user to the login page after successful registration
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

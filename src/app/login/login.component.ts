import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  username!: string;
  password!: string;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  handleLogin(): void {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.authService.login(this.username, this.password)
      .subscribe(val => {
        if (val) {
          this.router.navigate(['data-input']);
        }
      })
  }
}

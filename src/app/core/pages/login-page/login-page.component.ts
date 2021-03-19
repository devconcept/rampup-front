import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const {required} = Validators;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loginError = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('auth')) {
      this.router.navigate(['/']);
      return;
    }
    this.loginForm = this.fb.group({
      username: this.fb.control('', [required]),
      password: this.fb.control('', [required]),
    });
  }

  login(): void {
    if (this.loginForm.controls.username.value === 'admin' && this.loginForm.controls.password.value === 'admin') {
      localStorage.setItem('auth', JSON.stringify('ok'));
      this.router.navigate(['/']);
      return;
    }
    this.loginError = true;
  }

}

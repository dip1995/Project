import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router,private apiService : ApiService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Getter for easier access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let username =  this.loginForm.value.username;
    let password =  this.loginForm.value.password;
    let obj = {
     username : username,
     password : password 
    }
    this.apiService.login(obj).subscribe(res => {
      if(res){
        this.router.navigate(['/home'])
      }
    })

    // Dummy authentication check
    // if (this.f.username.value === 'admin' && this.f.password.value === 'admin') {
    //   // Navigate to dashboard on success (or any page you want to redirect to)
    //   this.router.navigate(['/dashboard']);
    // } else {
    //   this.errorMessage = 'Invalid username or password';
    // }
  }
}

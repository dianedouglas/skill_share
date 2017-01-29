import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../shared/security/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder, private authService:AuthService, private router:Router) { 
    this.form = this.fb.group({
      email: ['Enter Email', Validators.required],
      password: ['Enter Password', Validators.required],
    });
  }

  ngOnInit() {
  }

  signin(){
    this.authService.login(this.form.value.email, this.form.value.password)
      .subscribe( //navigate home on successful login, if error, call alert.
        ()=>{
          this.router.navigate(['/home']);
        },
        ()=>{
          alert('there was an error');
        }
    );
    
  }

}

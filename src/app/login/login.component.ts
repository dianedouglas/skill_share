import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      email: ['Enter Email', Validators.required],
      password: ['Enter Password', Validators.required],
    });
  }

  ngOnInit() {
  }

  login(){
    
  }

}

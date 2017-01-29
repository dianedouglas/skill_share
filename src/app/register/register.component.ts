import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from "../shared/security/auth.service";
import {Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private authService: AuthService,
              private router: Router) { 

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });

  }

  isPasswordMatch() {
    const formData = this.form.value;
    // return true only if the form data and the password field are not blank
    // and if the password field is equal to the confirm field  
    return formData && formData.password && formData.password == formData.confirm; 
  }

  register() {
    const formData = this.form.value;
    this.authService.signUp(formData.email, formData.password)
      .subscribe(
        () => {
          alert('user created!'); //confirm message and then to /home.
          this.router.navigateByUrl('/home');
        },
        err => alert(err) //otherwise show error.
      );
  }

}
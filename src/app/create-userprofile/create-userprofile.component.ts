import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/security/auth.service";

@Component({
  selector: 'app-create-userprofile',
  templateUrl: './create-userprofile.component.html',
  styleUrls: ['./create-userprofile.component.css']
})
export class CreateUserprofileComponent implements OnInit {

  constructor(private auth: AuthService) { }

  private email: string;

  ngOnInit() {
    this.email = this.auth.userEmail;
    console.log('test', this.email);
  }

  saveProfile(){
    
  }

}

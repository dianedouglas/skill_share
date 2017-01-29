import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/security/auth.service";
import { UsersService } from "../shared/model/users.service";

@Component({
  selector: 'app-create-userprofile',
  templateUrl: './create-userprofile.component.html',
  styleUrls: ['./create-userprofile.component.css']
})
export class CreateUserprofileComponent implements OnInit {

  constructor(private auth: AuthService, private usersService: UsersService) { }

  private email: string;

  ngOnInit() {
    this.email = this.auth.userEmail;
    console.log('test', this.email);
  }

  saveProfile(form) {
   this.usersService.createNewUser(form.value, this.email)
      .subscribe( //returns observable which we subscribe to.
        () => {
          alert('user saved');
          form.reset();
        },
        err => {
          alert('error:' + err);
        }
      );
  }

}

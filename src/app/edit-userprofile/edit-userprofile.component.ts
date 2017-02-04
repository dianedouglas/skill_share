import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/model/user';
import { UsersService } from "../shared/model/users.service";
import { AuthService } from "../shared/security/auth.service";

@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.css']
})
export class EditUserprofileComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private usersService: UsersService, private router: Router, private auth: AuthService) {  
    //receives input data for the component before component was created by router.
    route.data.subscribe(
      data => this.user = data['user']
    )
  }

  ngOnInit() {
  }


  save(userData) {
  // sends user key and data from form to service
    userData['email'] = this.auth.userEmail;
    debugger;
    this.usersService.saveEditedUser(this.user.$key, userData)
      .subscribe(
        () => {
          this.router.navigate(['/user-profile']);
        },
        err => {
          alert('error saving user: ' + err);
        }
      )
  }



}

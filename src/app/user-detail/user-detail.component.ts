import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/security/auth.service";
import { UsersService } from "../shared/model/users.service";
import { User} from '../shared/model/user';
import { Skill} from '../shared/model/skill';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  currentUser: any;
  private email: string;
  skills$: Observable<Skill[]>;

  constructor(private auth: AuthService, private usersService: UsersService) { }

  ngOnInit() {
    this.email = this.auth.userEmail;
    this.usersService.findUserByEmail(this.email).subscribe(
      val => {
        console.log(val);
        this.currentUser = val[0];
      }
    );
    this.skills$ = this.usersService.findSkillsForUser(this.email);
  }

}

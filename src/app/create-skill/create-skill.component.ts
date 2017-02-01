import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/security/auth.service";
import { SkillsService } from "../shared/model/skills.service";
import { UsersService } from "../shared/model/users.service";
import { Router } from '@angular/router';

@Component({
  selector: 'create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.css']
})
export class CreateSkillComponent implements OnInit {

  constructor(private auth: AuthService, private skillsService: SkillsService, private router: Router, private usersService: UsersService) { }

  private email: string;
  private userId: string;

  ngOnInit() {
    this.email = this.auth.userEmail;
    this.usersService.findUserByEmail(this.email).subscribe(
      val => {
        console.log(val);
        this.userId = val[0] ? 'anonymous' : val[0].$key;
      }
    );

  }

saveSkill(form){
  this.skillsService.createNewSkill(form.value, this.userId)
    .subscribe(
      () => {
          alert('skill saved');
          form.reset();
          this.router.navigateByUrl('user-profile');
       },
       err => {
         alert('error:' + err);
       }
    );

  }

}

import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../shared/model/skills.service';
import { Skill } from '../shared/model/skill';
import { AuthService } from "../shared/security/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skillsProperty: Skill[];
  userEmail: string = 'anon';

  constructor(private skillsService: SkillsService, private auth: AuthService) { }

  ngOnInit() {
    this.skillsService.findAllSkills()
      .do(console.log)
      .subscribe(
        skillsFromDB => this.skillsProperty = skillsFromDB
      );
  this.userEmail = this.auth.userEmail;
    console.log('testhome', this.userEmail);
  }

}

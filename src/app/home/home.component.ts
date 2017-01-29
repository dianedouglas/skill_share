import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../shared/model/skills.service';
import { Skill } from '../shared/model/skill';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  skillsProperty: Skill[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.findAllSkills()
      .do(console.log)
      .subscribe(
        skillsFromDB => this.skillsProperty = skillsFromDB
      )
  }

}

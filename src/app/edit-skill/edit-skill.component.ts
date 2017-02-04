import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { SkillsService } from '../shared/model/skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  currentSkill;

  constructor(private route:ActivatedRoute, private skillsService: SkillsService) { }

  ngOnInit() {
    var skill$ = this.route.params.subscribe(params => {
      const skillKey = params['id'];
      debugger;
      return this.skillsService.findSkillByKey(skillKey).subscribe(
        skill => {
            this.currentSkill = skill;
            console.log('current skill', this.currentSkill);
          }
        );
    });
  }

}

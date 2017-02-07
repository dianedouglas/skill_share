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

  constructor(private route: ActivatedRoute, private skillsService: SkillsService, private router: Router) { }

  ngOnInit() {
    var skill$ = this.route.params.subscribe(params => {
      const skillKey = params['id'];
      return this.skillsService.findSkillByKey(skillKey).subscribe(
        skill => {
            this.currentSkill = skill;
            console.log('current skill', this.currentSkill);
          }
        );
    });
  }

  save(skillData) {

  // sends skill key and data from form to service
    skillData['userId'] = this.currentSkill.userId;
    this.skillsService.saveEditedSkill(this.currentSkill.$key, skillData)
      .subscribe(
        () => {
          this.router.navigate(['/user-profile']);
        },
        err => {
          alert('error saving user: ' + err);
        }
      )
  }

  delete() {
    this.skillsService.deleteSkill(this.currentSkill.$key)
      .subscribe(
          () => {
            // alert('The selected skill has been deleted!');
          },
          console.error
        );
  }
  deleteSkillPerUser() {
    this.skillsService.deleteSkillPerUser(this.currentSkill.$key, this.currentSkill.userId)
      .subscribe(
          () => {
            this.router.navigate(['/user-profile']);
          },
          console.error
        );
  }

}

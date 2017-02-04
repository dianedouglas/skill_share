import { Component, OnInit, Input } from '@angular/core';
import { Skill } from "../shared/model/skill";
import { Router } from '@angular/router';

@Component({
  selector: 'skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  @Input()
  skills: Skill[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEdit(skillObject){
    debugger;
    this.router.navigate(['edit-skill', skillObject.$key]);
  }

}

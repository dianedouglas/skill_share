import { Component, OnInit, Input } from '@angular/core';
import { Skill } from "../shared/model/skill";

@Component({
  selector: 'skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {
  @Input()
  skills: Skill[];

  constructor() { }

  ngOnInit() {
  }

}

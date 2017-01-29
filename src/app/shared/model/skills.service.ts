import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Skill } from './skill';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SkillsService {

  constructor(private af: AngularFire) { }
  findAllSkills(): Observable<Skill[]> {
    return this.af.database.list('skills');
  }
}

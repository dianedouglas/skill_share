import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User} from './user';
import { Skill } from './skill';
import { AngularFire, FirebaseRef } from 'angularfire2';
import { Subject } from "rxjs/Rx";

@Injectable()
export class SkillsService {

  sdkDb: any;
  currentUser: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
  }


  findAllSkills(): Observable<Skill[]> {
    return this.af.database.list('skills')
      .do(console.log)
      .map(skillsAsJson => Skill.fromJsonList(skillsAsJson));
  }

  createNewSkill(skillData: any, userId: string): Observable<any> {
        const skillToSave = Object.assign({}, skillData, { userId: userId });
        const newSkillKey = this.sdkDb.child('skills').push().key;
        let dataToSave = {};
        dataToSave["skills/" + newSkillKey] = skillToSave;
        dataToSave["skillsPerUser/" + userId + "/" + newSkillKey] = true;
        // save into both tables at once. we will need this to edit lessons too, so separate function.
        return this.firebaseUpdate(dataToSave);
  }

  firebaseUpdate(dataToSave) {
    // create rxjs subject so that we can convert it to an observable to return. we want to stay consistent and use observables rather than promises or callbacks. 
    const subject = new Subject();
    this.sdkDb.update(dataToSave)
      .then(
          val => {
            subject.next(val);
            subject.complete();
          },
          err => {
            subject.error(err);
            subject.complete();
          }
        );
    return subject.asObservable();
  }
}

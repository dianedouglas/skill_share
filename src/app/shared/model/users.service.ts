import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { Skill } from './skill';
import { AngularFire, FirebaseRef,AngularFireDatabase } from 'angularfire2';
import { Subject } from "rxjs/Rx";
import { FirebaseListFactoryOpts } from "angularfire2/interfaces";

@Injectable()
export class UsersService {

  sdkDb: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb, private db: AngularFireDatabase) {
    this.sdkDb = fb.database().ref();
  }

  findAllUsers(): Observable<User[]> {
    return this.db.list('users').map(User.fromJsonList);
  }
  findAllUsersBySkill(skillInput) {
    const skillsMatches$ = this.db.list('skills', {
      query: {
        orderByChild: 'skill_name',
        equalTo: skillInput
      }
    });
    return skillsMatches$
    .map(skillsMatchesParam => skillsMatchesParam.map(skill => this.db.object('users/' + skill.userId)) )
    .flatMap(fbojs => Observable.combineLatest(fbojs) )
          .do(console.log);
  }

  findUserByEmail(email: string) {
    return this.af.database.list('users', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }

  findUserByEmailNew(email: string): Observable<User> {
    return this.db.list('users', {
      query: {
        orderByChild: 'email',
        equalTo: email
        // email is passed in here from our 'id' parameter in course-detail.
      }
    }).map(results => results[0]);
  }

  findSkillsForUser(email: string){
    console.log(email);
    // get course observable we have navigated to by url.
    const user$ = this.findUserByEmailNew(email);

    // go to the lessonsPerCourse table(node)
    // inside of there, find the user table by $key output lessons.
    // get back gross firebase object observable array.
    const skillsPerUser$ = user$
      .switchMap(user => this.db.list('skillsPerUser/' + user.$key))
      .do(console.log);

      // talking to the reference we got back from lessonsPerCourse above
      // for each firebaseObjectObservable in that array we call db.object to get back the observable for the lesson from the lessons table
      // this is at the address lessons/lessonkey
      // THEN we call flatmap on that and somehow that gives us an array of useable lesson objects.
    return skillsPerUser$
      .map(skillsPerUserParameter => skillsPerUserParameter.map(skill => this.db.object('skills/' + skill.$key)) )
      .flatMap(fbojs => Observable.combineLatest(fbojs) )
      .do(console.log);
  }


  createNewUser(userData:any, emailInput:string):Observable<any> {
    // prepare data we want to save. create new object passing lesson data and userId
    const userToSave = Object.assign({}, userData, { email: emailInput});
    console.log(userToSave);
    // create new id of lesson by saying:
    // hey sdk create a child in the lessons table
    // call push method without passing in the data yet to just create the slot.
    // call '.key' to get the key property and store it.
    // const newUserKey = this.sdkDb.child('users').push().key;
    const newUserKey = this.sdkDb.child('users').push().key;
    console.log(newUserKey);
    // then we want to save both into lessons and lessonsPerCourse at the same time to make sure they are consistent.
    // create empty object of data to save.
    let dataToSave = {};
    // add property with URL for each table.
    dataToSave["users/" + newUserKey] = userToSave;
    // dataToSave["lessonsPerCourse/" + courseId + "/" + newLessonKey] = true;
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

import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { User} from './user';
import { AngularFire, FirebaseRef } from 'angularfire2';
import { Subject } from "rxjs/Rx";

@Injectable()
export class UsersService {

  sdkDb: any;

  constructor(private af: AngularFire, @Inject(FirebaseRef) fb) {
    this.sdkDb = fb.database().ref();
  }

  findUserByEmail(email: string) {
    return this.af.database.list('users', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }


  createNewUser(userData:any, emailInput:string):Observable<any> {
    // prepare data we want to save. create new object passing lesson data and courseId
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
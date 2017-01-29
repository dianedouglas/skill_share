import { Component } from '@angular/core';
import { initializeApp, database} from 'firebase';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private af: AngularFire){
    const users$: FirebaseListObservable<any> = af.database.list('users');
    users$.subscribe(
      val => console.log(val)
    );
  }
}

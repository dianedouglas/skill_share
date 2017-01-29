import { Component } from '@angular/core';
import { initializeApp, database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDhyRz5WogFqRN9wBYLLIVhFUIOuNeebts",
      authDomain: "skill-share-angular2-19e00.firebaseapp.com",
      databaseURL: "https://skill-share-angular2-19e00.firebaseio.com",
      storageBucket: "skill-share-angular2-19e00.appspot.com",
      messagingSenderId: "729612898539"
    };
    initializeApp(config);
    var root = database().ref();
    root.on('value', function(snap){
      console.log(snap.val());
    })
  }
}

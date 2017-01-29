
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyDhyRz5WogFqRN9wBYLLIVhFUIOuNeebts",
    authDomain: "skill-share-angular2-19e00.firebaseapp.com",
    databaseURL: "https://skill-share-angular2-19e00.firebaseio.com",
    storageBucket: "skill-share-angular2-19e00.appspot.com",
    messagingSenderId: "729612898539"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
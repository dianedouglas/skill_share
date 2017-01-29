import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule } from "angularfire2/index";

import {SkillsService} from "./shared/model/skills.service";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

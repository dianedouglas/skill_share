import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule } from "angularfire2/index";
import { SkillsService } from "./shared/model/skills.service";
import { UsersService } from "./shared/model/users.service";
import { Skill } from "./shared/model/skill";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/security/auth.service';
import { authConfig } from '../environments/firebase.config';
import { CreateUserprofileComponent } from './create-userprofile/create-userprofile.component';
import { UserprofileFormComponent } from './userprofile-form/userprofile-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsListComponent,
    TopMenuComponent,
    LoginComponent,
    RegisterComponent,
    CreateUserprofileComponent,
    UserprofileFormComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    RouterModule.forRoot(routerConfig)
  ],
  providers: [UsersService, SkillsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

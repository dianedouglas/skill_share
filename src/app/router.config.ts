import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CreateUserprofileComponent} from './create-userprofile/create-userprofile.component';
import {UserDetailComponent} from './user-detail/user-detail.component';


export const routerConfig: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },  
  {
    path: 'new-profile',
    component: CreateUserprofileComponent
  },  
  {
    path: 'user-profile',
    component: UserDetailComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

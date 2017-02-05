import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CreateUserprofileComponent} from './create-userprofile/create-userprofile.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {CreateSkillComponent} from './create-skill/create-skill.component';
import {CommunitySearchComponent} from './community-search/community-search.component';
import {AuthGuard} from'./shared/security/auth.guard';
import {EditUserprofileComponent} from'./edit-userprofile/edit-userprofile.component';
import { UserResolver } from './shared/model/user.resolver';
import { ViewUserComponent } from './view-user/view-user.component';

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
    path: 'community',
    component: CommunitySearchComponent
  },  
  {
    path: 'new-profile',
    component: CreateUserprofileComponent,
    canActivate: [AuthGuard]
  },  
  {
    path: 'user-profile',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: UserDetailComponent
      },
      {
        path: 'edit',
        component: EditUserprofileComponent,
        resolve: {
          user: UserResolver
        }
      }
    ]
  },
  {
    path: 'users/:id',
    component: ViewUserComponent
  },
  {
    path: 'add-skill',
    component: CreateSkillComponent,
    canActivate: [AuthGuard]
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

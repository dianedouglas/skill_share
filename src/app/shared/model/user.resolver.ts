import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { AuthService } from "../security/auth.service";


@Injectable()
export class UserResolver implements Resolve<User>{

  constructor(private usersService: UsersService, private authService: AuthService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
    return this.usersService.findUserByEmail(this.authService.userEmail).first();
  }
}
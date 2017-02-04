import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {AuthService} from'./auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private authService:AuthService, private router:Router ) {
  }

  canActivate(route:ActivatedRouteSnapshot,
              state:RouterStateSnapshot):Observable<boolean> {
    // authservice gives us authinfo$ observable. 
    // this gives as value an object of authInfo which has bool isLoggedIn

    return this.authService.authInfo$
        .map(authInfo => authInfo.isLoggedIn())
        //complete the observable like a promise
        .take(1)
        .do(allowed => {
            if(!allowed) {
              //if not allowed, redirect to login.
              this.router.navigate(['/home']);
            }
        });
  }
}
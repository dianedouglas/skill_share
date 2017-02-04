import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { UsersService } from '../shared/model/users.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  id: any;
  currentUser;

  constructor(private router: Router,  private route:ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    var user$ = this.route.params.subscribe(params => {
      const userKey = params['id'];
      return this.usersService.findUserByKey(userKey).subscribe(
        user => {
            this.currentUser = user;
            console.log('current user', this.currentUser);
          }
        );
    });
  }

}

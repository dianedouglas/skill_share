import { Component, OnInit, Input } from '@angular/core';
import { User } from "../shared/model/user";
import { Router } from '@angular/router';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input()
  users: User[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUserDetail(userObject) {
    console.log(userObject);
    this.router.navigate(['users', userObject.$key]);
  }

}

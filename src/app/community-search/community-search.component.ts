import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user';
import { UsersService } from "../shared/model/users.service";

@Component({
  selector: 'app-community-search',
  templateUrl: './community-search.component.html',
  styleUrls: ['./community-search.component.css']
})
export class CommunitySearchComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // rather than find all users, 
    // you could instead make a different call here to 
    // service find all users in a specific area.
    this.usersService.findAllUsers()
      .subscribe(
        users => this.users = users
      )
  }

}

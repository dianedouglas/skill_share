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
  filteredUsers: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // rather than find all users, 
    // you could instead make a different call here to 
    // service find all users in a specific area.
    this.usersService.findAllUsers()
      .subscribe(
      users => this.users = this.filteredUsers = users
    )
  }

  search(userInput) {
    // uses search bar to filter by username. Could easily be reconfigured or copied to search by city.
    this.filteredUsers = this.users.filter( currentUser => currentUser.username.includes(userInput));
  }

}

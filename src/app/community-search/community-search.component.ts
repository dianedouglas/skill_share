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
  userNameSearch: string;
  userSkillSearch: string;

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

  searchByUsername(userInput) {
    // uses search bar to filter by username. Could easily be reconfigured or copied to search by city.
    // after receiving a user name from search bar, store it and then filter the current group of users by it.
    this.userNameSearch = userInput;
    this.filterByUsername(this.filteredUsers);
  }

  filterByUsername(currentUsers) {
    // receive the current group of users, could be stored in either filtered or all and filter, then store back in filtered users.
    if(this.userNameSearch) {    
      const newlyFilteredUsers = currentUsers.filter( currentUser => currentUser.username.includes(this.userNameSearch));
      this.filteredUsers = newlyFilteredUsers;
    } else {
      // if there's no search term, then just rerun filter by skill.
      this.filterBySkill();
    }
  }

  searchBySkill(userInput) {
    this.userSkillSearch = userInput;
    this.filterBySkill();
  }

  filterBySkill() {
    if (!this.userSkillSearch && !this.userNameSearch) {
      this.filteredUsers = this.users;
    }
    else if(!this.userSkillSearch){
      // if the username search exists but the skill search doesn't
      //pass in all users to be filtered by name if there's no specified skill so you can reset and see all.
      this.filterByUsername(this.users);
    } else {    
      // if there is a skill name, filter by it, then if there is a user name search in place, narrow results down.
      this.usersService.findAllUsersBySkill(this.userSkillSearch)
        .subscribe(
        users => {
          this.filteredUsers = users;
          // after filtering by skillname, pass that group in to be filtered by username too if there is one in place.
          if(this.userNameSearch) {
            this.filterByUsername(this.filteredUsers);
          }
        }
      );
    }
  }

}

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
  filteredUserLocation: User[];
  userLocationSearch: string;
  userSkillSearch: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // rather than find all users,
    // you could instead make a different call here to
    // service find all users in a specific area.
    this.usersService.findAllUsers()
      .subscribe(
      users => this.users = this.filteredUserLocation = users
    )
  }

  searchByLocation(userInput) {
    // after receiving a user name from search bar, store it and then filter the current group of users by it.
    this.userLocationSearch = userInput;
    this.filterByLocation(this.filteredUserLocation);
  }

  filterByLocation(currentUsers) {
    // receive the current group of users, could be stored in either filtered or all and filter, then store back in filtered users.
    if(this.userLocationSearch) {
      const newlyFilteredUserLocation = currentUsers.filter( currentUser => currentUser.location.includes(this.userLocationSearch));
      this.filteredUserLocation = newlyFilteredUserLocation;
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
    if (!this.userSkillSearch && !this.userLocationSearch) {
      this.filteredUserLocation = this.users;
    }
    else if(!this.userSkillSearch){
      // if the location search exists but the skill search doesn't
      //pass in all users to be filtered by location if there's no specified skill so you can reset and see all.
      this.filterByLocation(this.users);
    } else {
      // if there is a skill name, filter by it, then narrow results down by location
      this.usersService.findAllUsersBySkill(this.userSkillSearch)
        .subscribe(
        users => {
          this.filteredUserLocation = users;
          // after filtering by skillname, pass that group in to be filtered by location too if there is one in place.
          if(this.userLocationSearch) {
            this.filterByLocation(this.filteredUserLocation);
          }
        }
      );
    }
  }

}

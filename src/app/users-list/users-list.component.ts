import { Component, OnInit, Input } from '@angular/core';
import { User } from "../shared/model/user";

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input()
  users: User[];

  constructor() { }

  ngOnInit() {
  }

}

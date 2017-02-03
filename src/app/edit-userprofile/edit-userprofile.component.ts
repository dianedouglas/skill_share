import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-edit-userprofile',
  templateUrl: './edit-userprofile.component.html',
  styleUrls: ['./edit-userprofile.component.css']
})
export class EditUserprofileComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute) {  
    //receives input data for the component before component was created by router.
    route.data.subscribe(
      data => this.user = data['user']
    )
  }

  ngOnInit() {
  }

}

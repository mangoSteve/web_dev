//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { UserService } from '../../service/user.service';

//import class
import { User } from '../../domain/user';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],
  providers: [UserService]
})
export class ProfileDetailComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(<number><any>localStorage.getItem('userId'))
      .then(user => this.user = user);
  }

  save(): void{
    this.userService.updateUser(this.user)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { AppService } from '../../service/app.service';
import { UserService } from '../../service/user.service';

//import class
import { Application } from '../../domain/application';
import { User } from '../../domain/user';

@Component({
  selector: 'app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css'],
  providers: [AppService, UserService]
})
export class AppDetailComponent implements OnInit {

  app: Application;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private userService: UserService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params
      // get application form by its id
      .switchMap((params: Params) => this.appService.getAppById(+params['id']))
      .subscribe(app => {
        this.app = app;
        this.userService.getUserById(app.toId)
        .then(user => this.user = user);
      });
  }
  goBack(): void {
    this.location.back();
  }
}

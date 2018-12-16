//import angualr core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { AppService } from '../../service/app.service';
import { UserService } from '../../service/user.service';

//import class
import { Application } from '../../domain/application';
import { async } from 'q';
import { User } from '../../domain/user';

@Component({
  selector: 'app-new-app-list',
  templateUrl: './new-app-list.component.html',
  styleUrls: ['./new-app-list.component.css'],
  providers: [AppService, UserService]
})
export class NewAppListComponent implements OnInit {

  myId: number;
  user: User;
  apps: Application[];
  selectedApp: Application;

  constructor(
    private appService: AppService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.myId = <number><any>localStorage.getItem('userId');
    this.userService.getUserById(this.myId)
      .then(user => this.user = user );
    this.appService.getAppsByToId(this.myId)
      .then(apps => this.apps = apps);
  }

  deleteApp(app: Application): void {
    this.appService
      .deleteAppById(app.id)
      .then(() => {
        this.apps = this.apps.filter(h => h !== app);
        if (this.selectedApp === app) { this.selectedApp = null; }
      });
  }
  addApp(type: string, amount: number, reason: string, toName: string) {
    var today = new Date(),
      dd = today.getDate(),
      mm = today.getMonth() + 1,
      yyyy = today.getFullYear(),
      appTime = dd + '/' + mm + '/' + yyyy,
      statusUpdateTime = appTime,
      myName = this.user.username
      
    this.appService.createApp(appTime, amount, reason, type, status = "waiting", statusUpdateTime, " ", myName, toName, 0)
      .then(app => {
        this.apps.push(app);
        this.selectedApp = null;
      });
  }

  onSelect(app: Application): void {
    this.selectedApp = app;
    this.router.navigate(['/newapp', this.selectedApp.id]);
  }

  goBack(): void {
    this.location.back();
  }
}

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

@Component({
  selector: 'app-new-app-list',
  templateUrl: './new-app-list.component.html',
  styleUrls: ['./new-app-list.component.css'],
  providers: [AppService, UserService]
})
export class NewAppListComponent implements OnInit {

  myId: number;
  myName: string;
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
    this.myName = this.userService.getUserById(this.myId)['name'];
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

  addApp(type: string, amount: number, reason: string, comment: string, toName: string): void {
    var toId = this.userService.getUserByUsername(toName)['id'];
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    var appTime = dd + '/' + mm + '/' + yyyy;
    var statusUpdateTime = appTime

    console.log(this.userService.getUserByUsername(toName));
    
    this.appService.createApp(appTime, amount, reason, type, status = "waiting", statusUpdateTime, comment = " ", this.myName, toId)
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

//import angualr core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { AppService } from '../../service/app.service';
import { UserService } from '../../service/user.service';

//import class
import { Application } from '../../domain/application';
import { User } from '../../domain/user';

@Component({
  selector: 'app-my-app-list',
  templateUrl: './my-app-list.component.html',
  styleUrls: ['./my-app-list.component.css'],
  providers: [AppService, UserService]
})
export class MyAppListComponent implements OnInit {

  myId: number;
  apps: Application[];
  selectedApp: Application;
  user: User;

  constructor(
    private appService: AppService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.myId = <number><any>localStorage.getItem('userId');
    this.userService.getUserById(this.myId)
      .then(user => this.user = user);
    this.appService.getAppsByToId(this.myId)
      .then(apps => this.apps = apps);
    // this.appService.getAppsByToName(this.user.username)
    //   .then(apps => this.apps.concat(apps));
  }

  deleteApp(app: Application): void {
    this.appService
        .deleteAppById(app.id)
        .then(() => {
          this.apps = this.apps.filter(h => h !== app);
          if (this.selectedApp === app) { this.selectedApp = null; }
        });
  }

  onSelect(app: Application): void {
    this.selectedApp = app;
    this.router.navigate(['/myapp', this.selectedApp.id]);
  }
}

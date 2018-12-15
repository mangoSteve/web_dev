//import angualr core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { AppService } from '../../service/app.service';

//import class
import { Application } from '../../domain/application';

@Component({
  selector: 'app-my-app-list',
  templateUrl: './my-app-list.component.html',
  styleUrls: ['./my-app-list.component.css'],
  providers: [AppService]
})
export class MyAppListComponent implements OnInit {

  myId: number;
  apps: Application[];
  selectedApp: Application;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.myId = <number><any>localStorage.getItem('id');
    this.appService.getAppsByToId(this.myId)
      .then(apps => this.apps = apps);
  }

  addApp(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.appService.createAppByNameUserId(name,this.myId)
      .then(app => {
        this.apps.push(app);
        this.selectedApp = null;
      });
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

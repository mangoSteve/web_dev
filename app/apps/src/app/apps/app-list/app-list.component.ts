//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { AppService } from '../../service/app.service';

//import class
import { Application } from '../../domain/application';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
  providers: [AppService]
})
export class AppListComponent implements OnInit {

  myDepartment: string;
  apps: Application[];
  selectedId : number;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.myDepartment = <string><any>localStorage.getItem('department');
    this.appService.getAppsByDepartment(this.myDepartment)
      .then(apps => this.apps = apps);
    // this.appService.getApps()
    //   .then(apps => this.apps = apps);

  }

  isSelected(app: Application){
    return app.id === this.selectedId;
  }

  onSelect(app: Application){
    this.router.navigate(['/app', app.id]);
  }
}


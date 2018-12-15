//import angular core
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//import third package
import 'rxjs/add/operator/switchMap';

//import service
import { AppService } from '../../service/app.service';

//import class
import { Application } from '../../domain/application';

@Component({
  selector: 'app-new-app-detail',
  templateUrl: './new-app-detail.component.html',
  styleUrls: ['./new-app-detail.component.css'],
  providers: [AppService]
})
export class NewAppDetailComponent implements OnInit {

  app: Application;
  appGenders: string[] = ['MALE', 'FEMALE', 'OTHER'];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.appService.getAppById(+params['id']))
      .subscribe(app => this.app = app);
  }

  save(): void {
    this.appService.updateApp(this.app)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}


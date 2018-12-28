import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../../service/user.service';
import { User } from '../../domain/user';

@Component({
  selector: 'app-update-detail',
  templateUrl: './update-detail.component.html',
  styleUrls: ['./update-detail.component.css'],
  providers: [UserService]
})
export class UpdateDetailComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit() {
    this.route.params
      // get application form by its id
      .switchMap((params: Params) => this.userService.getUserById(+params['id']))
      .subscribe(user => {
        this.user = user;
        this.userService.getUserById(user.id)
        .then(user => this.user = user);
      });
  }

  save(): void{
    if (this.user.department!='diplomacy' && this.user.department!='propoganda' && this.user.department!='activity' && this.user.department!='all')
    {
      const warn=document.getElementById('warn');
      warn.innerHTML="Department does not exist!";
    }
    else if (this.user.position!='department secretary' && this.user.position!='department minister' && this.user.position!='community teacher' && this.user.position!='department chairman' && this.user.position!='community chairman')
    {
      const warn=document.getElementById('warn');
      warn.innerHTML="Position does not exist!";
    }else
    {
      this.userService.updateUser(this.user)
      .then(() => this.goBack());
    }
    }

    goBack(): void {
      this.location.back();
    }

}

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
  userId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserById(<number><any>localStorage.getItem('userId'))
      .then(user => this.user = user);
    const divLogout = document.getElementById('Logout');
    const divLogin = document.getElementById('Login');
    const divRegister = document.getElementById('Register');
    const divDetail = document.getElementById('myprof');
    const divSet = document.getElementById('setprof');
    divSet.style.color="#607D8B";
    divDetail.style.color='#039be5';
    this.userId = -1;
    if(localStorage.getItem('userId') !== null){
      divRegister.style.display='none';
      divLogin.style.display = 'none';
      this.userId = <number><any>localStorage.getItem('userId');
    }     
    else{
      divLogout.style.display = 'none';
    }
  }

  logout() {
    localStorage.removeItem('userId');
    this.userId = -1;
    let link = ['/login'];
    this.router.navigate(link);
    location.reload();
  }
}

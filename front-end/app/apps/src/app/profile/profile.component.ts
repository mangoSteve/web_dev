import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';

// import 'rxjs/add/operator/switchMap';

// //import service
// import { UserService } from '../service/user.service';

// //import class
// import { User } from '../domain/user';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css'],
//   providers: [UserService]
// })
// export class ProfileComponent implements OnInit {


//   userId: number;
//   user: User;
//   constructor(private route: ActivatedRoute,
//     private router: Router,
//     private location: Location,
//     private userService: UserService) { }

//   ngOnInit() {
//     const divLogin = document.getElementById('Login');
//     const divLogout = document.getElementById('Logout');
//     const divRegister = document.getElementById('Register');
//     this.userService.getUserById(<number><any>localStorage.getItem('userId'))
//       .then(user => this.user = user);
//     this.userId = -1;
//     if(localStorage.getItem('userId') !== null){
//      //已登录
//      divLogin.style.display = 'none';
//      divRegister.style.display='none';
     
//      this.userId = <number><any>localStorage.getItem('userId');

//     }
//     else{
//       //未登录
//       divLogout.style.display = 'none';
//     }
//   }

//   logout() {
//     localStorage.removeItem('userId');
//     this.userId = -1;
//     location.reload();
//   }

//   save(): void{
//     this.userService.updateUser(this.user)
//       .then(() => this.goBack());
//   }

//   goBack(): void {
//     this.location.back();
//   }

// }

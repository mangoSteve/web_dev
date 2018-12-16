import { Component, OnInit } from '@angular/core';

import { User } from '../domain/user';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  user= new User();
  id: number;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.userService.createUser(this.user)
    .then(user => {
      console.log(user);
    });
  }
}

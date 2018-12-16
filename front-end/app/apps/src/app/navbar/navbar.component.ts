import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userId: number;

  constructor() { }

  ngOnInit(){
    const divLogin = document.getElementById('Login');
    const divLogout = document.getElementById('Logout');
    const divRegister = document.getElementById('Register');
    this.userId = -1;
    if(localStorage.getItem('userId') !== null){
     //已登录
     divLogin.style.display = 'none';
     divRegister.style.display='none';
     
     this.userId = <number><any>localStorage.getItem('userId');

    }
    else{
      //未登录
      divLogout.style.display = 'none';
    }
  }

  logout() {
    localStorage.removeItem('userId');
    this.userId = -1;
    location.reload();
  }
}


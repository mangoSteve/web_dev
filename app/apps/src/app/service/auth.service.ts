import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Auth } from '../domain/auth';

@Injectable()
export class AuthService {

  constructor(private http: Http, @Inject('user') private userService) { }

  loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.userService.getUserByUsername(username)  //调用UserService中的方法来查找user
      .then(user => {
        let auth = new Auth();
        localStorage.removeItem('userId');  //首先移除当前本地存储的userId
        let redirectUrl = (localStorage.getItem('redirectUrl') === null) ?
          '/' : localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;      //存储原本要访问的Url
        if (null === user) {
          //没找到user
          auth.hasError = true;
          auth.errMsg = 'user not found';
        } else if (password === user.password) {
          //找到user并与密码匹配成功
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId', user.id);
        } else {
          //密码错误
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        return auth;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


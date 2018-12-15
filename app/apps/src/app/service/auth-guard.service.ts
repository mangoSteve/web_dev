import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    //已登录
    if (localStorage.getItem('userId') !== null) {
      //返回true，放行
      return true;
    }
    //未登录
    else {
      //首先将要访问的URL暂存
      localStorage.setItem('redirectUrl', url);
      //然后导航到登录页面
      this.router.navigate(['/login']);
      //返回false，取消本次导航
      return false;
    }
  }
}

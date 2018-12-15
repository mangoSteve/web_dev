//import angular core
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

//import third package
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

//import my services
import { ApiService } from './api.service';

//import class
import { Application } from '../domain/application';
import { stringify } from '@angular/core/src/util';

@Injectable()
export class AppService {
  private api_url : string ;
  private headers : Headers ;

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/application';
    this.headers = apiService.getHeaders();
  }

  //查询所有App
  getApps(): Promise<Application[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Application[])
      .catch(this.handleError);
  }

  //按 id 查询App
  getAppById(id: number): Promise<Application> {
    const url = `${this.api_url}/${id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Application)
      .catch(this.handleError);
  }

  //按接收者的 id 查询 App
  getAppsByToId(toId: number): Promise<Application[]> {
    const url = `${this.api_url}/?toId=${toId}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Application[])
      .catch(this.handleError);
  }

  //search app
  searchApp(term: string): Observable<Application[]> {
    return this.http
      .get(`${this.api_url}?name_like=${term}`)
      .map(response => response.json() as Application[]);
  }

  //新建App
  // createApp(app: Application): Promise<Application> {
  //   const url = `${this.api_url}`;
  //   return this.http
  //     .post(url, JSON.stringify(app), { headers: this.headers })
  //     .toPromise()
  //     .then(res => res.json() as Application)
  //     .catch(this.handleError);
  // }

  //按name与userId新建App
  createApp(appTime: string, amount: number, reason: string, type: string, 
    status: string, statusUpdateTime: string, comment: string, from: string, toId: number): Promise<Application> {
    let app = {
      appTime: appTime,
      amount: amount,

      reason: reason,
      type: type,

      status: status,
      statusUpdateTime: statusUpdateTime,

      comment: comment,
      from: from,
      toId: toId
    }
    const url = `${this.api_url}`;
    return this.http
      .post(url, JSON.stringify(app), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Application)
      .catch(this.handleError);
  }

  //修改App
  updateApp(app: Application): Promise<Application> {
    const url = `${this.api_url}/${app.id}`;
    return this.http
      .put(url, JSON.stringify(app), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Application)
      .catch(this.handleError);
  }

  //删除某个App
  deleteApp(app: Application): Promise<void> {
    const url = `${this.api_url}/${app.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  //按id删除某个App
  deleteAppById(id: number): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { AppService } from '../../service/app.service';
import { Application } from '../../domain/application';
 
@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: [ './app-search.component.css' ],
  providers: [AppService]
})
export class AppSearchComponent implements OnInit {
  apps: Observable<Application[]>;
  private searchTerms = new Subject<string>();
 
  constructor(
    private appService: AppService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.apps = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.appService.searchApp(term)
        // or the observable of empty apps if there was no search term
        : Observable.of<Application[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Application[]>([]);
      });
  }
 
  gotoDetail(app: Application): void {
    let link = ['/app', app.id];
    this.router.navigate(link);
  }
}

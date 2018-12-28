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
 
import { UserService } from '../../service/user.service';
import { User } from '../../domain/user';
 
@Component({
  selector: 'app-set-profile',
  templateUrl: './set-profile.component.html',
  styleUrls: ['./set-profile.component.css'] ,
  providers: [UserService]
})
export class SetProfileComponent implements OnInit {
  profs: Observable<User[]>;
  private searchTerms = new Subject<string>();
  userName="";
  user: User;
 
  constructor(
    private userService: UserService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  set(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.userService.getUserById(<number><any>localStorage.getItem('userId'))
      .then(user => this.user = user);
    const divDetail = document.getElementById('myprof');
    const divSet = document.getElementById('setprof');
    divSet.style.color='#039be5';
    divDetail.style.color="#607D8B";
    this.profs = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.userService.searchUser(term)
        // or the observable of empty apps if there was no search term
        : this.userService.searchUser(''))//Observable.of<User[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<User[]>([]);
      });
  }

  UpdateName(user:User): void{
    const setBox = document.getElementById('set-box');
    this.userName=user.username;
    const menu=document.getElementById('menu');
  }
 
  gotoUpdate(newUser: User): void {
    let table = {
      'department secretary': 1,
      'department minister': 2,
      'community teacher': 5,
      'community chairman': 4,
      'department chairman': 3
    };
    let newRank=table[newUser.position];
    let oriRank=table[this.user.position];
    if (newRank>=oriRank)
    {
      const setWarning = document.getElementById('warning');
      setWarning.style.display='block';
    }else
    {
      let link = ['/profile', newUser.id];
      this.router.navigate(link);
    }
  }
}

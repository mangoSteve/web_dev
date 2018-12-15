import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { AppListComponent }    from './app-list/app-list.component';
import { AppDetailComponent }  from './app-detail/app-detail.component';
import { AppsRoutingModule } from './apps-routing.module'; 
import { AppService } from '../service/app.service';
import { MyAppListComponent } from './my-app-list/my-app-list.component';
import { MyAppDetailComponent } from './my-app-detail/my-app-detail.component';
import { NewAppListComponent } from './new-app-list/new-app-list.component';
import { NewAppDetailComponent } from './new-app-detail/new-app-detail.component';
import { AppsComponent } from './apps.component';
import { AppSearchComponent } from './app-search/app-search.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppsRoutingModule
  ],
  declarations: [
    AppListComponent,
    AppDetailComponent,
    MyAppListComponent,
    MyAppDetailComponent,
    NewAppListComponent,
    NewAppDetailComponent,
    AppsComponent,
    AppSearchComponent
  ],
  providers: [ AppService ]
})
export class AppsModule {}

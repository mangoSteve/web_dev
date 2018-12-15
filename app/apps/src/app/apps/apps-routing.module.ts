//import angular core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import my components
import { AppsComponent }      from './apps.component';
import { AppListComponent }      from './app-list/app-list.component';
import { AppDetailComponent }  from './app-detail/app-detail.component';
import { MyAppListComponent } from './my-app-list/my-app-list.component';
import { MyAppDetailComponent } from './my-app-detail/my-app-detail.component';
import { NewAppListComponent } from './new-app-list/new-app-list.component';
import { NewAppDetailComponent } from './new-app-detail/new-app-detail.component';

const routes: Routes = [
    {
        path: '',
        component: AppsComponent,
        children: [
            { 
                path: '', 
                component: AppListComponent 
            },
            {   path: 'app/:id', 
                component: AppDetailComponent 
            },
            {
                path:'myapps',
                component: MyAppListComponent
            },
            {
                path:'myapp/:id',
                component: MyAppDetailComponent
            },
            {
                path: 'newapps',
                component: NewAppListComponent
            },
            {
                path: 'newapps/:id',
                component: NewAppDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AppsRoutingModule { }


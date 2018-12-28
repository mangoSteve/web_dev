//import angular core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import my mudules
import { AppsModule } from './apps/apps.module';
import { ProfileModule } from './profile/profile.module';
//import my components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import my service
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'apps',
        canActivate: [AuthGuardService],
        loadChildren: 'app/apps/apps.module#AppsModule'
    },
    {
        path: 'profile',
        canActivate: [AuthGuardService],
        loadChildren: 'app/profile/profile.module#ProfileModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


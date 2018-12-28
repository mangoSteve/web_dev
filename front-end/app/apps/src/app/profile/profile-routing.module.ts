import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import my components
import { ProfileDetailComponent }  from './profile-detail/profile-detail.component';
import { SetProfileComponent } from './set-profile/set-profile.component';
import { ProfileComponent } from './profile.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            { 
                path: '', 
                component: ProfileDetailComponent
            },
            {
                path:'myprofile',
                component: ProfileDetailComponent
            },
            {
                path: 'setprofile',
                component: SetProfileComponent
            },
            {
                path: 'profile/:id', 
                component: UpdateDetailComponent 
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }

// //import angular core
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// //import my components
// import { ProfileComponent } from './profile.component';

// const routes: Routes = [
//     {
//         path: '',
//         component: ProfileComponent
//     }
// ];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })

// export class ProfileRoutingModule { }
 

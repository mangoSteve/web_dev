import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
 
import { ProfileDetailComponent }  from './profile-detail/profile-detail.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { UserService } from '../service/user.service';
import { SetProfileComponent } from './set-profile/set-profile.component';
import { ProfileComponent } from './profile.component';
import { UpdateDetailComponent } from './update-detail/update-detail.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileDetailComponent,
    SetProfileComponent,
    ProfileComponent,
    UpdateDetailComponent 
  ],
  providers: [ UserService ]
})
export class ProfileModule {}

// //import angular core
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule }    from '@angular/forms';
// //import my modules
// import { ProfileRoutingModule } from './profile-routing.module';
// //import my components
// import { ProfileComponent } from './profile.component';

// @NgModule({
//   imports: [
//     CommonModule,
//     ProfileRoutingModule,
//     FormsModule
//   ],
//   declarations: [
//     ProfileComponent
//   ]
// })
// export class ProfileModule { }

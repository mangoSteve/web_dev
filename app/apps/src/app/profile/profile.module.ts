//import angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
//import my modules
import { ProfileRoutingModule } from './profile-routing.module';
//import my components
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }

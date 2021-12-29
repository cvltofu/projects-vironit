import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [UserRegistrationComponent, UserLoginComponent],
  exports: [],
})
export class UsersModule {}

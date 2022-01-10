import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, UsersModule],
  declarations: [HomeComponent],
  exports: [],
})
export class HomeModule {}

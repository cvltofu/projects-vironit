import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule],
  declarations: [NotFoundComponent],
  exports: [],
})
export class NotFoundModule {}

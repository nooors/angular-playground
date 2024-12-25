import { HeaderModule } from './components/header/header.module';
import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { ButtonsRowModule } from './components/buttons-row/buttons-row.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    ButtonsRowModule,
    MatButtonModule,
    MatDividerModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

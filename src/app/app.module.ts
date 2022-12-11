import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { ButtonsRowModule } from "./components/buttons-row/buttons-row.module";
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonsRowModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

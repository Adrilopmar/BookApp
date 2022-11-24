import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardBooksComponent } from './components/dashboarBooks/dashboard-books.component';
import { SingleBookComponent } from './components/single-book/single-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardBooksComponent,
    SingleBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

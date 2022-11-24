import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardBooksComponent } from './components/dashboarBooks/dashboard-books.component';
import { SingleBookComponent } from './components/single-book/single-book.component';

const routes: Routes = [
  {path:'', component:DashboardBooksComponent},
  {path:'book/:isbn', component: SingleBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

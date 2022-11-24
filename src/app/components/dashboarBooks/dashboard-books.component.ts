import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { BooksService } from 'src/app/services/books-service.service';
import { Book } from 'src/app/classes/books';

@Component({
  selector: 'app-dashboard-books',
  templateUrl: './dashboard-books.component.html',
  styleUrls: ['./dashboard-books.component.css']
})
export class DashboardBooksComponent implements OnInit {

  constructor(private http:HttpClient,
    private bookSvc:BooksService) {}

allBooks:any =[]

   ngOnInit():void {
   this.allBooks = this.bookSvc.getBooks().subscribe(book => {this.allBooks = book})
   
  }

}

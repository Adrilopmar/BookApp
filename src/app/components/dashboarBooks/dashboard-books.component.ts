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
    public bookSvc:BooksService) {}



     ngOnInit():void {
      // this.bookSvc.getBooks().subscribe(book => {this.bookSvc.allBooks=book})
     
  }
  conse():void{
    console.log(this.bookSvc.allBooks)
  }
}

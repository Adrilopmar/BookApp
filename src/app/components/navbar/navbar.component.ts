import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books-service.service';
import { SearchService } from 'src/app/services/search.service';
import { Book } from 'src/app/classes/books';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private bookSvc:BooksService,
    public searchSvc:SearchService) { }
  inputToSearch:string=''
  search(input:string){
    this.bookSvc.searchBooks(input)
  }
  searchBtn(input:string){
    this.searchSvc.userSearch(input)
    this.bookSvc.searchBooks(input)
    console.log(this.searchSvc.searchs,'asd')
  }
  ngOnInit(): void {
    this.bookSvc.getBooks()
  }

}

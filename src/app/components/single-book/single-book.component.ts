import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book } from 'src/app/classes/books';
import { BooksService } from 'src/app/services/books-service.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  constructor(private route:ActivatedRoute, private bookSvc:BooksService) { }
  singleBook!: Book;
  ngOnInit(): void {
   this.bookSvc.getBookIsbn(this.route.snapshot.paramMap.get('isbn')).subscribe(book=> this.singleBook = book)
  }

}

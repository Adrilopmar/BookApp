import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../classes/books';
import { Observable} from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient) { }

  allBooks:any;
  filteredBooks:any;

 getBooks():Observable<Book>{
  let getAllbooks =  this.http.get<Book>('https://api.angular.schule/books')
 getAllbooks.subscribe(books =>{ this.allBooks = books, this.filteredBooks=books})
 
  return  getAllbooks
}
getBookIsbn(isbn:string | null):Observable<Book>{
  return  this.http.get<Book>(`https://api.angular.schule/books/${isbn}`)
}
 searchBooks(input:string){
  this.filteredBooks = this.allBooks
  this.filteredBooks = this.filteredBooks.filter((data:Book)=> data.title.trim().toLocaleLowerCase().includes(input.trim().toLocaleLowerCase()))
}


}

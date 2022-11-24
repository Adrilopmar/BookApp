import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../classes/books';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient) { }


getBooks():Observable<Book>{
  return this.http.get<Book>('https://api.angular.schule/books')
}
getBookIsbn(isbn:string | null):Observable<Book>{
  return  this.http.get<Book>(`https://api.angular.schule/books/${isbn}`)
}

}

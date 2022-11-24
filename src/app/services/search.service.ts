import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

searchs:Array<string>=['','','']

userSearch(input:string):void{
  this.searchs.unshift(input)
  this.searchs.length=3
}

  constructor() { }
}

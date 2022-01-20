import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // Constructor dependency injection
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("http://localhost:56622/api/book")
    .pipe(
      map(
        (result: BookModel[])=> result)
      );

    // Observable (very similar to promisee) -
    // provides data in form of streams.
    // observer design pattern
    // object(observable) - product  books(from server)
    // observers (subscribers) - you/customers ()
    // publishers (who emits data); // amazon system publishes data  (getAll)

  }
}

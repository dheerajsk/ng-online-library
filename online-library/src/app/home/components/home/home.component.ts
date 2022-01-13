import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/components/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dotnetBook: BookModel;

  constructor() { }

  // Lifecycle hook-> Component in initialized
  ngOnInit(): void {
    this.dotnetBook = new BookModel(1, ".Net Core", "Packt", 1000, "https://images-na.ssl-images-amazon.com/images/I/51JdckX4AdL.jpg");
  }

}

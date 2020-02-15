import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/sherd/books.service";
import { Book } from "src/app/sherd/Models/book";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  query: string;
  books: Book[] = [];
  constructor(private booksService: BooksService) {}

  ngOnInit() {}

  searchBook() {
    this.booksService.books.subscribe(books => {
      this.books = books;
    });
    this.booksService.search(this.query);
  }
}

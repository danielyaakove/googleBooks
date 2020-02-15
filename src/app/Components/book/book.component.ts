import { Component, OnInit, Input } from "@angular/core";
import { Book } from "src/app/sherd/Models/book";
import { Router } from "@angular/router";
import { BooksService } from "src/app/sherd/books.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(private route: Router, private booksService: BooksService) {}

  ngOnInit() {}
  addToFavorite(book: Book) {}
  bookDetails(book: Book) {
    this.booksService.setCurrentBook(book);
    this.route.navigate(["details"]);
  }
}

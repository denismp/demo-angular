import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Book } from '../../../common/models/book.model';

import { BooksService } from '../../../common/services/books.service';

import { AppStore } from '../../../common/models/appstore.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html'
})
export class BooksListComponent {
    @Input() books: Book[];
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();

    originalId: number;
    selectedBook: Book = {
        id: null,
        title: '',
        authors: null,
        user: null,
        publishDate: null,
        createdBy: '',
        createdDate: null,
        updatedBy: '',
        updatedDate: null
    };

    @Input() set book(value: Book) {
        if (value) {
            this.originalId = value.id;
        }
        this.selectedBook = Object.assign({}, value);
    }

    observableBooks: Observable<Array<Book>>;
    selectedObservableBook: Observable<Book>;

    constructor(
        private router: Router,
        private store: Store<AppStore>,
    ) {
        this.observableBooks = store.select(state => state.books);
        this.selectedObservableBook = store.select(state => state.selectedBook);
        this.observableBooks.subscribe(v => console.log(v));
        this.selectedObservableBook.subscribe(v => console.log(v));
    }

    routeToBook(book: Book): void {
        this.selectedBook = book;
        console.log('routeToObservation(): called...');
        this.store.dispatch({ type: 'SELECT_BOOK', payload: this.selectedBook });
        this.router.navigate(['/home/books/detail']);
    }
}

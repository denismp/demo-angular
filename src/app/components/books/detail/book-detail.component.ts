import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../common/models/appstore.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../../../common/models/book.model';
import { BooksService } from '../../../common/services/books.service';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    providers: [BooksService]
})
export class BookDetailComponent implements OnInit {
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

    selectedObservableBook: Observable<Book>;

    constructor(
        private booksService: BooksService,
        private store: Store<AppStore>,
        private router: Router,
        private activatedRouter: ActivatedRoute
    ) {
        this.selectedObservableBook = store.select(state => state.selectedBook);
    }

    ngOnInit(): void {
        this.setBook();
    }

    setBook(): void {
        this.store.select('selectedBook')
            .subscribe(data => { this.selectedBook = data; });
    }

    addBook( event: any ): void {
        console.log('addBook(): called...');
        this.store.dispatch({ type: 'ADD_BOOKS', payload: this.selectedBook });
        this.router.navigate(['/home/book/detail/add']);
    }
}

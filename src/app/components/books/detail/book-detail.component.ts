import 'rxjs/add/operator/switchMap';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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
    bookForm: FormGroup;

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
        this.bookForm = new FormGroup({
            'id': new FormControl({ value: this.selectedBook.id, disabled: true }, Validators.required),
            'title': new FormControl({ value: this.selectedBook.title, disabled: true }, Validators.required),
            'publishDate': new FormControl({ value: this.selectedBook.publishDate, disabled: true }, Validators.required)
        });
    }

    setBook(): void {
        this.store.select('selectedBook')
            .subscribe(data => { this.selectedBook = data; });
    }

    addBook(event: any): void {
        console.log('addBook(): called...');
        this.store.dispatch({ type: 'SELECT_BOOK', payload: this.selectedBook });
        this.router.navigate(['/home/book/detail/add']);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { AppStore } from '../models/appstore.model';
import { Book } from '../models/book.model';

const BASE_URL = 'http://localhost:8090/books';
const BASE_SINGLE_URL = 'http://localhost:8090/book';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BooksService {
    booksObservable: Observable<Array<Book>>;

    constructor( private http: HttpClient, private store: Store<AppStore>) {
        this.booksObservable = store.select( state => state.books );
    }

    loadBooks() {
        this.http.get(`${BASE_URL}`, httpOptions)
        .pipe(
            map(payload => ({ type: 'ADD_BOOKS', payload }))
        )
        .subscribe( action => this.store.dispatch(action));
    }

    getBook(id: number) {
        return this.http.get<Book>(`${BASE_SINGLE_URL}/${id}`, httpOptions);
    }

    updateBook( book: Book ) {
        this.http.put(`${BASE_SINGLE_URL}`, JSON.stringify(book))
        .pipe(
            map(payload => ({ type: 'UPDATE_BOOK', payload }))
        )
        .subscribe( action => this.store.dispatch(action));
    }

    createBook( book: Book ) {
        this.http.post(`${BASE_SINGLE_URL}`, JSON.stringify(book))
        .pipe(
            map(payload => ({ type: 'CREATE_BOOK', payload }))
        )
        .subscribe( action => this.store.dispatch(action));
    }

    deleteBook( book: Book ) {
        this.http.delete(`${BASE_SINGLE_URL}/${book.id}`)
        .pipe(
            map(payload => ({ type: 'DELETE_BOOK', payload }))
        )
        .subscribe( action => this.store.dispatch(action));
    }

}

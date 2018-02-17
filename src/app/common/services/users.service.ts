import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { AppStore } from '../models/appstore.model';
import { User } from '../models/user.model';

const BASE_URL = 'http://localhost:8090/users';
const BASE_SINGLE_URL = 'http://localhost:8090/user/get-by-email';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UsersService {
    usersObservable: Observable<Array<User>>;

    constructor( private http: HttpClient, private store: Store<AppStore>) {
        this.usersObservable = store.select( state => state.users );
    }

    loadUsers() {
        this.http.get(`${BASE_URL}`, httpOptions)
        .pipe(
            map(payload => ({ type: 'ADD_USERS', payload }))
        )
        .subscribe( action => this.store.dispatch(action));
    }

    getUser(id: number) {
        return this.http.get<User>(`${BASE_SINGLE_URL}/${id}`, httpOptions);
    }

    updateUser( user: User ) {
        this.http.put(`${BASE_SINGLE_URL}`, JSON.stringify(user))
        .pipe(
            map(payload => ({ type: 'UPDATE_USER', payload }))
        )
        .subscribe( action => this.store.dispatch(action));
    }

    createUser( user: User ) {
        this.http.post(`${BASE_SINGLE_URL}`, JSON.stringify(user))
        .pipe(
            map(payload => ({ type: 'CREATE_USER', payload }))
        )
        .subscribe( action => this.store.dispatch(action));
    }

    deleteUser( user: User ) {
        this.http.delete(`${BASE_SINGLE_URL}/${user.id}`)
        .pipe(
            map(payload => ({ type: 'DELETE_USER', payload }))
        )
        .subscribe( action => this.store.dispatch(action));
    }

}

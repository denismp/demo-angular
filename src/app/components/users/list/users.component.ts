import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../common/models/appstore.model';
import { User } from '../../../common/models/user.model';
import { UsersService } from '../../../common/services/users.service';

@Component({
    selector: 'app-users',
    template: `
    <div class='app-users'>
        <app-users-list [users]="usersObservable | async"
        (selected)="selectUser($event)" (deleted)="deleteUser($event)">
        </app-users-list>
    </div>
    `,
    providers: [UsersService]
})
export class UsersComponent implements OnInit {
    title = 'Demo';
    usersObservable: Observable<Array<User>>;
    constructor(
        private store: Store<AppStore>,
        private authorsService: UsersService
    ) {
        this.usersObservable = store.select(state => state.users);
        this.usersObservable.subscribe(v => console.log(v));

    }
    ngOnInit(): void {
        let load = true;
        this.usersObservable.subscribe(function (authors) {
            console.log(authors);
            if (authors !== undefined && authors !== null && authors.length !== 0) {
                load = false;
            }
        });
        if (load === true) {
            this.authorsService.loadUsers();
        }
    }

    resetUser() {
        const emptyItem: User = {
            id: null,
            email: '',
            name: '',
            books: null,
            createdBy: '',
            createdDate: null,
            updatedBy: '',
            updatedDate: null
        };

        this.store.dispatch({ type: 'SELECT_USER', payload: emptyItem });
    }

    selectUser( item: User ) {
        this.store.dispatch({ type: 'SELECT_USER', payload: item });
    }

    saveUser(item: User) {
        // this.authorService.saveUser(item);
        this.resetUser();
    }

    deleteUser(item: User ) {
        // this.authorService.deleteUser(item);
        this.resetUser();
    }
}

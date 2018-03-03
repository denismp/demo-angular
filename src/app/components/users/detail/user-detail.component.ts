import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../common/models/appstore.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../../common/models/user.model';
import { UsersService } from '../../../common/services/users.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    providers: [UsersService]
})
export class UserDetailComponent implements OnInit {
    selectedUser: User = {
        id: null,
        email: '',
        name: '',
        books: null,
        createdBy: '',
        createdDate: null,
        updatedBy: '',
        updatedDate: null
    };

    selectedObservableUser: Observable<User>;

    constructor(
        private booksService: UsersService,
        private store: Store<AppStore>,
        private router: Router,
        private activatedRouter: ActivatedRoute
    ) {
        this.selectedObservableUser = store.select(state => state.selectedUser);
    }

    ngOnInit(): void {
        this.setUser();
    }

    setUser(): void {
        this.store.select('selectedUser')
            .subscribe(data => { this.selectedUser = data; });
    }

    addUser( event: any ): void {
        console.log('addUser(): called...');
        this.store.dispatch({ type: 'SELECT_USER', payload: this.selectedUser });
        this.router.navigate(['/home/user/detail/add']);
    }
}

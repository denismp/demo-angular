import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../common/models/appstore.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../../../common/models/book.model';
import { BooksService } from '../../../common/services/books.service';
import { AuthorsService } from '../../../common/services/authors.service';
import { Author } from '../../../common/models/author.model';

@Component({
    selector: 'app-add-author',
    templateUrl: './add-author.component.html',
    providers: [AuthorsService, BooksService]
})
export class AddAuthorComponent implements OnInit {
    selectedTargetAuthors: Author[];
    selectedSourceAuthors: Author[];
    authorForm: FormGroup;
    selectedAuthor: Author = {
        id: null,
        name: '',
        books: null,
        createdBy: '',
        createdDate: null,
        updatedBy: '',
        updatedDate: null
    };
    emptySelectedAuthor: Author = {
        id: null,
        name: '',
        books: null,
        createdBy: '',
        createdDate: null,
        updatedBy: '',
        updatedDate: null
    };
    selectedObservableAuthor: Observable<Author>;

    constructor(
        private authorsService: AuthorsService,
        private booksService: BooksService,
        private store: Store<AppStore>,
        private router: Router,
        private activatedRouter: ActivatedRoute,
        private location: Location
    ) {
        this.selectedObservableAuthor = store.select(state => state.selectedAuthor);
    }

    ngOnInit(): void {
        this.authorForm = new FormGroup({
            'name': new FormControl(this.selectedAuthor.name, Validators.required)
        });
    }

    onSubmit(): void {
        console.log('onSubmit(): called...');

        this.getFormData();
        this.store.dispatch({type: 'CREATE_AUTHOR', payload: this.selectedAuthor});
        this.location.back();
    }

    onCancel(): void {
        console.log('onCancel(): called...');
        // clean up stuff here
        this.router.navigate(['/home/authors']);
    }

    getFormData(): void {
        this.selectedAuthor.name = this.authorForm.get('name').value;
        this.store.dispatch({ type: 'SELECT_AUTHOR', payload: this.selectedAuthor });
        // this.getAuthor();
    }

    getAuthor(): void {
        let temp: Author;
        this.store.select('selectedAuthor')
            .subscribe(data => {
                temp = data;
                if (temp !== undefined) {
                    this.selectedAuthor = data;
                }
            });
    }
}

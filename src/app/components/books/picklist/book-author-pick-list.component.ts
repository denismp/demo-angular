import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Author } from '../../../common/models/author.model';
import { User } from '../../../common/models/user.model';

import { AuthorsService } from '../../../common/services/authors.service';

import { AppStore } from '../../../common/models/appstore.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-books-author-pick-list',
    templateUrl: './books-author-pick-list.component.html'
})
export class BooksAuthorPickListComponent implements OnInit {

    sourceAuthors: Author[];

    targetAuthors: Author[];

    constructor(private authorsService: AuthorsService) {

    }

    ngOnInit() {
        this.authorsService.loadAuthors();
    }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';

import { routes } from './routes/routes';

import { DataTableModule, SharedModule, ButtonModule } from 'primeng/primeng';
import { routingModule, appRoutingProviders } from './routes/routes';

import { Ng5BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { HomeScreenComponent } from './components/home/home-screen.component';


import { books } from './common/stores/books.store';
import { selectedBook } from './common/stores/selectedBook.store';
import { BooksComponent } from './components/books/list/books.component';
import { BooksListComponent } from './components/books/list/books-list.component';
import { BookDetailComponent } from './components/books/detail/book-detail.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    BooksComponent,
    BooksListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    Ng5BreadcrumbModule.forRoot(),
    RouterModule.forRoot(routes, { enableTracing: true }),
    StoreModule.forRoot( {books, selectedBook }),
    StoreLogMonitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

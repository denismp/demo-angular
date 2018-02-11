// import { BooksListComponent } from '../components/book/list/books-list-component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from '../components/home/home-screen.component';
import { BooksComponent } from '../components/books/list/books.component';
import { BookDetailComponent } from '../components/books/detail/book-detail.component';

export const routes = [
    { path: '', component: HomeScreenComponent},
    { path: '*', component: HomeScreenComponent},
    // { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeScreenComponent },
    { path: 'home/books', component: BooksComponent },
    { path: 'home/books/detail', component: BookDetailComponent }
    // { path: '**', component, PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

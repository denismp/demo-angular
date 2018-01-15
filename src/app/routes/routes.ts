// import { BooksListComponent } from '../components/book/list/books-list-component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from '../components/home/home-screen.component';

export const routes = [
    { path: '', component: HomeScreenComponent},
    { path: '*', component: HomeScreenComponent},
    // { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeScreenComponent },
    // { path: 'home/books', component: BooksComponent },
    // { path: '**', component, PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

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

import { books } from './common/stores/books.store';
import { selectedBook } from './common/stores/selectedBook.store';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
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

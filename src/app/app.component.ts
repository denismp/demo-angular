import { Component } from '@angular/core';
import { BreadcrumbService } from './components/breadcrumb/breadcrumb.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private breadcrumbService: BreadcrumbService) {
    breadcrumbService.addFriendlyNameForRoute( '/home', 'Home');
    breadcrumbService.addFriendlyNameForRoute( '/home/books', 'Books' );

    // breadcrumbService.hideRouteRegex('^/home/books/detail/\\d+$');
    // breadcrumbService.hideRouteRegex('^/home/dir1/dir2/dir3$');
  }
}

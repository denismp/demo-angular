import { Item } from './item.model';
import { Widget } from './widget.model';
import { Book } from './book.model';
import { HomeScreen } from './home-screen.model';

export interface AppStore {
  home: HomeScreen;
  books: Book[];
  selectedBook: Book;
  items: Item[];
  selectedItem: Item;
  widgets: Widget[];
  selectedWidget: Widget;
}

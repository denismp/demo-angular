import { Item } from './item.model';
import { Widget } from './widget.model';
import { Book } from './book.model';

export interface AppStore {
  books: Book[];
  selectedBook: Book;
  items: Item[];
  selectedItem: Item;
  widgets: Widget[];
  selectedWidget: Widget;
}

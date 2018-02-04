import { Book } from './book.model';
export interface User {
    id: number;
    email: string;
    name: number;
    books: Array<Book>;
    createdBy: string;
    createdDate: Date;
    updatedBy: string;
    updatedDate: Date;
}

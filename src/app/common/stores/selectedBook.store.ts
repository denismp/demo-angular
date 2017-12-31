export const selectedBook = (state: any = [], { type, payload }) => {
    switch (type) {
        case 'SELECT_BOOK':
            return payload;
        default:
            return state;
    }
};

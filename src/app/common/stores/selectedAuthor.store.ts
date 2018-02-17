// export const selectedAuthor = (state: any = [], { type, payload }) => {
export function selectedAuthor(state: any = [], { type, payload }) {
    switch (type) {
        case 'SELECT_USER':
            return payload;
        default:
            return state;
    }
}

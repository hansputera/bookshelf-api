export interface IBook {
    id: string;
    name: string;
    year: number;
    author: string;
    summary: string;
    publisher: string;
    pageCount: number;
    reading: boolean;
    readPage: number;
    finished: boolean;
    insertedAt: string;
    updatedAt: string;
}

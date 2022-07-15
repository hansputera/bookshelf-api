/** @typedef {import('@hapi/hapi').ServerRoute} ServerRoute */
/** @typedef {import('@hapi/hapi').Request} Request */
/** @typedef {import('@hapi/hapi').ResponseToolkit} Response */

import {BookModel} from '../models/Book.js';
import {bookStores} from '../stores.js';

/** @type {ServerRoute} */
/**
 * Book Change Controller.
 * @param {Request} req - HTTP Request
 * @param {Response} res - HTTP Response.
 */
export const bookChange = async function (req, res) {
    // Reuse the book.
    let book = bookStores.get(req.params.bookId);

    if (!book) {
        return res
            .response({
                status: 'fail',
                message: 'Gagal memperbarui buku. Id tidak ditemukan',
            })
            .code(404);
    }

    const createdBook = book.createdAt;

    book = new BookModel(
        req.payload.name,
        req.payload.year,
        req.payload.author,
        req.payload.summary,
        req.payload.publisher,
        req.payload.pageCount,
        req.payload.readPage,
        req.payload.reading,
    );

    book.id = req.params.bookId;
    book.createdAt = createdBook;
    bookStores.set(book.id, book);

    return res
        .response({
            status: 'success',
            message: 'Buku berhasil diperbarui',
        })
        .code(200);
};

/** @typedef {import('@hapi/hapi').ServerRoute} ServerRoute */
/** @typedef {import('@hapi/hapi').Request} Request */
/** @typedef {import('@hapi/hapi').ResponseToolkit} Response */

import {bookStores} from '../stores.js';

/** @type {ServerRoute} */
/**
 * Book List Controller.
 * @param {Request} req - HTTP Request
 * @param {Response} res - HTTP Response.
 */
export const bookList = async function (req, res) {
    let books = Array.from(bookStores.values()).map((b) => ({
        id: b.id,
        name: b.name,
        publisher: b.publisher,
    }));

    if (req.query.name)
        books = books.filter((b) =>
            b.name.toLowerCase().includes(req.query.name.toLowerCase()),
        );
    if (req.query.finished) books = books.filter((b) => b.finished);
    if (req.query.reading) books = books.filter((b) => b.reading);

    return res
        .response({
            status: 'success',
            data: {
                books,
            },
        })
        .code(200);
};

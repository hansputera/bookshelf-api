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
    const books = Array.from(bookStores.values()).map((b) => ({
        id: b.id,
        name: b.name,
        publisher: b.publisher,
    }));

    return res
        .response({
            status: 'success',
            data: {
                books,
            },
        })
        .code(200);
};

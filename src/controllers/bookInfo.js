/** @typedef {import('@hapi/hapi').ServerRoute} ServerRoute */
/** @typedef {import('@hapi/hapi').Request} Request */
/** @typedef {import('@hapi/hapi').ResponseToolkit} Response */

import {bookStores} from '../stores.js';

/** @type {ServerRoute} */
/**
 * Book Info Controller.
 * @param {Request} req - HTTP Request
 * @param {Response} res - HTTP Response.
 */
export const bookInfo = async function (req, res) {
    const book = bookStores.get(req.params.bookId);

    if (book) {
        return res
            .response({
                status: 'success',
                data: {
                    book,
                },
            })
            .code(200);
    } else {
        return res
            .response({
                status: 'fail',
                message: 'Buku tidak ditemukan',
            })
            .code(404);
    }
};

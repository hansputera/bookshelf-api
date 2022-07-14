/** @typedef {import('@hapi/hapi').ServerRoute} ServerRoute */
/** @typedef {import('@hapi/hapi').Request} Request */
/** @typedef {import('@hapi/hapi').ResponseToolkit} Response */

import {bookStores} from '../stores.js';

/** @type {ServerRoute} */
/**
 * Book Delete Controller.
 * @param {Request} req - HTTP Request
 * @param {Response} res - HTTP Response.
 */
export const bookDelete = async function (req, res) {
    const book = bookStores.get(req.params.bookId);

    if (!book) {
        return res
            .response({
                status: 'fail',
                message: 'Buku gagal dihapus. Id tidak ditemukan',
            })
            .code(404);
    }

    bookStores.delete(req.params.bookId);
    return res
        .response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        })
        .code(200);
};

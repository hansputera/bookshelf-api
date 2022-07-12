/** @typedef {import('@hapi/hapi').ServerRoute} ServerRoute */
/** @typedef {import('@hapi/hapi').Request} Request */
/** @typedef {import('@hapi/hapi').ResponseToolkit} Response */

import {BookModel} from '../models/index.js';

/** @type {ServerRoute} */
/**
 * Book Create Controller.
 * @param {Request} req - HTTP Request
 * @param {Response} res - HTTP Response.
 */
export const bookCreate = async function (req, res) {
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = req.payload;

    const book = new BookModel(
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    );

    return res
        .response(JSON.stringify(book))
        .type('application/json')
        .code(201);
};

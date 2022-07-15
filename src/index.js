'use strict';

import Hapi from '@hapi/hapi';

import {bookCreate} from './controllers/bookCreate.js';
import {bookList} from './controllers/bookList.js';
import {bookInfo} from './controllers/bookInfo.js';
import {bookChange} from './controllers/bookChange.js';

import {bookSchema} from './validators/index.js';
import {failActionHandler} from './bit-handlers.js';
/**
 * Setup/boot up the project
 * @return {Promise<void>}
 **/
export async function setup() {
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // buat buku
    server.route({
        path: '/books',
        method: 'POST',
        options: {
            validate: {
                payload: bookSchema,
                failAction: failActionHandler,
            },
        },
        handler: bookCreate,
    });

    // tampilkan semua buku.
    server.route({
        path: '/books',
        method: 'GET',
        handler: bookList,
    });

    // dapatkan informasi buku.
    server.route({
        path: '/books/{bookId}',
        method: 'GET',
        handler: bookInfo,
    });

    // ganti informasi buku.
    server.route({
        path: '/books/{bookId}',
        method: 'PUT',
        handler: bookChange,
        options: {
            validate: {
                payload: bookSchema,
                failAction: failActionHandler,
            },
        },
    });

    // hapus buku.
    server.route({
        path: '/books/{bookId}',
        method: 'DELETE',
        handler: bookChange,
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
    return;
}

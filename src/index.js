'use strict';

import Hapi from '@hapi/hapi';

import {bookCreate} from './controllers/bookCreate.js';
import {bookList} from './controllers/bookList.js';

import {bookSchema} from './validators/index.js';
import {failActionHandler} from './bit-handlers.js';

/**
 * Setup/boot up the project
 * @return {Promise<void>}
 **/
export async function setup() {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
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

    server.route({
        path: '/books',
        method: 'GET',
        handler: bookList,
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
    return;
}

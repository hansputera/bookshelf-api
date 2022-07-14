'use strict';

import Hapi from '@hapi/hapi';

import {bookCreate} from './controllers/bookCreate.js';

import {bookSchema} from './validators/index.js';

/**
 * Setup/boot up the project
 * @return {Promise<void>}
 **/
export async function setup() {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
    });

    server.route({
        path: '/books',
        method: 'POST',
        options: {
            validate: {
                payload: bookSchema,
            },
        },
        handler: bookCreate,
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
    return;
}

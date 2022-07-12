'use strict';

import Hapi from '@hapi/hapi';

/**
 * Setup/boot up the project
 * @return {Promise<void>}
 **/
export async function setup() {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
    return;
}

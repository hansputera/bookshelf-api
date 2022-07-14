/** @typedef {import('@hapi/hapi').Request} Request */
/** @typedef {import('@hapi/hapi').ResponseToolkit} Response */
/** @typedef {import('@hapi/boom').Boom} BoomError */

/**
 * Fail action handler.
 * @param {Request} r Request object.
 * @param {Response} h Response object.
 * @param {Error | BoomError} err An Error.
 * @return {Promise<*>}
 */
export const failActionHandler = async (r, h, err) => {
    if (err.isBoom) {
        return h
            .response({
                status: err.output.statusCode === 400 ? 'fail' : 'error',
                message:
                    r.method === 'put'
                        ? err.message.replace(/menambahkan/gi, 'memperbarui')
                        : err.message,
            })
            .code(err.output.statusCode)
            .takeover();
    }

    return h.continue();
};

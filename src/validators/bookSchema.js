import Joi from 'joi';

export const bookSchema = Joi.object({
    name: Joi.string()
        .required()
        .error(() => new Error('Gagal menambahkan buku. Mohon isi nama buku')),
    year: Joi.number()
        .required()
        .error(
            () =>
                new Error('Gagal menambahkan buku. Mohon isi tahun rilis buku'),
        ),
    author: Joi.string()
        .required()
        .error(
            () => new Error('Gagal menambahkan buku. Mohon isi author buku'),
        ),
    summary: Joi.string()
        .required()
        .min(5)
        .error(
            () =>
                new Error(
                    'Gagal menambahkan buku. Mohon isi summary buku, dan minimal 5 karakter',
                ),
        ),
    publisher: Joi.string()
        .required()
        .min(3)
        .error(
            () => new Error('Gagal menambahkan buku. Mohon isi publisher buku'),
        ),
    pageCount: Joi.number()
        .required()
        .min(1)
        .error(
            () =>
                new Error(
                    'Gagal menambahkan buku. pageCount harus diisi sebagaimana mestinya',
                ),
        ),
    readPage: Joi.number()
        .required()
        .max(Joi.ref('pageCount'))
        .error(
            () =>
                new Error(
                    'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
                ),
        ),
    reading: Joi.bool()
        .required()
        .error(
            () =>
                new Error(
                    'Gagal menambahkan buku. reading harus diisi dengan boolean',
                ),
        ),
});

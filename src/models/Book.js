'use strict';

import {nanoid} from 'nanoid';

/**
 * @class BookModel
 */
export class BookModel {
    /**
     * @param {string} name - Book title.
     * @param {string} author - Book's author.
     * @param {string} summary - Book's summary.
     * @param {string} publisher - Book publisher.
     * @param {number} pageCount - Book pages count.
     * @param {number} readPage - Book readed page.
     * @param {boolean?} reading - Book reading status??
     */
    constructor(
        name,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading = false,
    ) {
        this.name = name;
        this.author = author;
        this.summary = summary;
        this.publisher = publisher;
        this.pageCount = pageCount;
        this.readPage = readPage;
        this.reading = reading;

        this.id = nanoid();
        this.insertedAt = new Date().toISOString();
        this.updatedAt = this.insertedAt;
    }

    /**
     * Already finished?
     * @return {boolean}
     */
    get finished() {
        return this.readPage === this.pageCount;
    }

    /**
     * Update current date.
     * @return {void}
     */
    update() {
        this.updatedAt = new Date().toISOString();
    }
}

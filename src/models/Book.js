'use strict';

import {nanoid} from 'nanoid';

/**
 * @class BookModel
 */
export class BookModel {
    /**
     * @param {string} name - Book title.
     * @param {number} year - Book release year.
     * @param {string} author - Book's author.
     * @param {string} summary - Book's summary.
     * @param {string} publisher - Book publisher.
     * @param {number} pageCount - Book pages count.
     * @param {number} readPage - Book readed page.
     * @param {boolean?} reading - Book reading status??
     */
    constructor(
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading = false,
    ) {
        this.name = name;
        this.year = year;
        this.author = author;
        this.summary = summary;
        this.publisher = publisher;
        this.pageCount = pageCount;
        this.readPage = readPage;
        this.reading = reading;
        this.finished = this.readPage === this.pageCount;

        this.id = nanoid();
        this.insertedAt = new Date().toISOString();
        this.updatedAt = this.insertedAt;
    }

    /**
     * Update current date.
     * @return {void}
     */
    update() {
        this.updatedAt = new Date().toISOString();
    }
}

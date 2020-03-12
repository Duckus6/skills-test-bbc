import React from 'react';
import ArticleAPI from './ArticleAPI';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import {mockArticle, mockArticles,mockError} from "./fixtures/articles";


const mock = new AxiosMockAdapter(axios);




describe("the server returns 200 code",()=> {
    beforeEach(() => {
        mock.onGet('data/').reply(200,
            mockArticles
        );
        mock.onGet(`data/${mockArticles[0]}`).reply(200,
            mockArticle
        );
    });
    afterEach(() => {
        mock.reset();
    });
    test('fetches article IDs without error', (done) => {

        new ArticleAPI().getArticles().then(articles => {
            expect(articles).toEqual(mockArticles);
            done();
        });

    });
    test('fetches an article without error',(done) =>{
        new ArticleAPI().getArticle(`${mockArticles[0]}`).then(article=>{
            expect(article).toEqual(mockArticle);
            done();
        });
    });
});


describe("The server returns 500 error",() => {
    beforeEach(() => {
        mock.onGet('data/').reply(500,
            mockError
        );
        mock.onGet(`data/${mockArticles[0]}`).reply(500,
            mockError
        );
    });
    afterEach(()=>{
        mock.reset()
    });
    test('fetches article IDs when server returns an error', (done) => {
        new ArticleAPI().getArticles().catch(err=>{
            expect(err.response.data).toEqual(mockError);
            done();
        });
    });
    test('fetches an article when server returns an error',(done)=>{
        new ArticleAPI().getArticle(`${mockArticles[0]}`).catch(err=>{
            expect(err.response.data).toEqual(mockError);
            done();
        });
    });
});





import React from 'react';
import ArticleAPI from './ArticleAPI';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import {mockArticle,mockArticles} from "./fixtures/articles";


const mock = new AxiosMockAdapter(axios);





test('fetches article IDs without error', (done) => {
    mock.onGet('data/').reply(200,
        mockArticles
    );
    new ArticleAPI().getArticles().then(articles=>{
        expect(articles).toEqual(mockArticles);
        done();
    });

});
test('fetches article IDs when server returns an error', (done) => {
    const error = '[Error: Request failed with status code 500]';
    mock.onGet('data/').reply(500,
        error
    );
    new ArticleAPI().getArticles().catch(err=>{
        expect(err.response.data).toEqual(error);
        done();
    });

});

test('fetches an article without error',(done) =>{
    const articleId = "article1.json";
    mock.onGet(`data/${articleId}`).reply(200,
        mockArticle
    );
    new ArticleAPI().getArticle(articleId).then(article=>{
        expect(article).toEqual(mockArticle);
        done();
    });
});
test('fetches an article when server returns an error',(done)=>{
    const articleId = "article1.json";
    const error = '[Error: Request failed with status code 500]';
    mock.onGet(`data/${articleId}`).reply(500,
        error
    );
    new ArticleAPI().getArticle(articleId).catch(err=>{
        expect(err.response.data).toEqual(error);
        done();
    });
});

import React from 'react';
import AxiosMockAdapter from 'axios-mock-adapter';
import {mockArticle,mockArticles} from "./fixtures/articles";
import {mount} from "enzyme";
import ArticleViewer from "./ArticleViewer";
import axios from "axios/index";
import {act} from "@testing-library/react";




const mock = new AxiosMockAdapter(axios);



describe("the server returns 200 code",()=>{
    beforeAll(()=>{
        mock.onGet('data/').reply(200,
            mockArticles
        );
        mock.onGet(`data/${mockArticles[0]}`).reply(200,
            mockArticle
            );
    });
    afterAll(()=>{
        mock.reset();
    });
    test('renders', async (done) => {
        jest.useFakeTimers();
        const wrapper = mount(<ArticleViewer/>);
        await act(async ()=>{
            jest.runAllImmediates();
        });
        wrapper.update();
        console.log(wrapper.debug());
        expect(wrapper.debug()).toMatchSnapshot();
        done();
    })
});

describe("the server returns 500 error",()=>{
    beforeAll(()=>{
        const error = '[Error: Request failed with status code 500]';
        mock.onGet('data/').reply(500,
            error
        );
    });
    afterAll(()=>{
        mock.reset();
    });
    test('renders', () => {
        const wrapper = mount(<ArticleViewer/>);
        expect(wrapper.debug()).toMatchSnapshot();
    })
});

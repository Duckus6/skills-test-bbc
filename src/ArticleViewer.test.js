import React from 'react';
import AxiosMockAdapter from 'axios-mock-adapter';
import {mockArticle,mockArticles,mockError} from "./fixtures/articles";
import {shallow} from "enzyme";
import ArticleViewer from "./ArticleViewer";
import axios from "axios/index";
import {act} from "@testing-library/react";




const mock = new AxiosMockAdapter(axios);



describe("the server returns 200 code",()=>{
    beforeEach(()=>{
        mock.onGet('data/').reply(200,
            mockArticles
        );
        mock.onGet(`data/${mockArticles[0]}`).reply(200,
            mockArticle
        );
        jest.spyOn(React,"useEffect").mockImplementationOnce(f=>f());
    });
    afterEach(()=>{
        mock.reset();
    });
    test('renders', async (done) => {
        jest.useFakeTimers();
        const wrapper = shallow(<ArticleViewer/>);
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
    beforeEach(()=>{
        mock.onGet('data/').reply(500,
            mockError
        );
        jest.spyOn(React,"useEffect").mockImplementationOnce(f=>f());
    });
    afterEach(()=>{
        mock.reset();
    });
    test('renders', () => {
        const wrapper = shallow(<ArticleViewer/>);
        expect(wrapper.debug()).toMatchSnapshot();
    })
});

import React from 'react';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import {mockArticle,mockArticles,mockInvalidArticle} from "./fixtures/articles";
import Article from "./Article";
import {shallow} from "enzyme/";
import {act} from "@testing-library/react/";



const mock = new AxiosMockAdapter(axios);


describe("the server returns 200 code",()=>{
    beforeEach(()=>{
        mock.onGet(`data/${mockArticles[0]}`).reply(200,
            mockArticle
        );
        mock.onGet(`data/${mockArticles[1]}`).reply(200,
            mockInvalidArticle
        );
        jest.spyOn(React,"useEffect").mockImplementationOnce(f=>f());
    });
    afterEach(()=>{
        mock.reset();
    });
    test('renders', async (done) => {
        jest.useFakeTimers();
        const wrapper = shallow(<Article article={mockArticle}/>);
        await act(async ()=>{
            jest.runAllImmediates();
        });
        wrapper.update();
        console.log(wrapper.debug());
        expect(wrapper.debug()).toMatchSnapshot();
        done()
    });
    test('renders error when invalid element is received', async (done) => {
        jest.useFakeTimers();
        const wrapper = shallow(<Article article={mockInvalidArticle}/>);
        await act(async ()=>{
            jest.runAllImmediates();
        });
        wrapper.update();
        console.log(wrapper.debug());
        expect(wrapper.containsMatchingElement(<p>An error has occurred</p>)).toBeTruthy();
        done();
    })
});







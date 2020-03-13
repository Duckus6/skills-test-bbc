import React from "react";
import AxiosMockAdapter from "axios-mock-adapter";
import {mockArticle,mockArticles,mockError} from "./fixtures/articles";
import {shallow} from "enzyme";
import ArticleViewer from "./ArticleViewer";
import axios from "axios/index";
import {act} from "@testing-library/react";




const mock = new AxiosMockAdapter(axios);


let mockUseEffect = null;
describe("the server returns 200 code",()=>{
    beforeEach(()=>{
        mock.onGet("data/").reply(200,
            mockArticles
        );
        mock.onGet(`data/${mockArticles[0]}`).reply(200,
            mockArticle
        );
        mockUseEffect = jest.spyOn(React,"useEffect").mockImplementationOnce(f=>f());
    });
    afterEach(()=>{
        mock.reset();
        console.log(mockUseEffect);
        mockUseEffect.mockImplementationOnce(f=>f());
    });
    test("renders", async (done) => {
        jest.useFakeTimers();
        const wrapper = shallow(<ArticleViewer/>);
        await act(async ()=>{
            jest.runAllImmediates();
        });
        wrapper.update();
        console.log(wrapper.debug());
        expect(wrapper.debug()).toMatchSnapshot();
        done();
    });

    test("Checking an article was read",async ()=>{
        mockUseEffect.mockImplementationOnce(f=>f());
        jest.useFakeTimers();
        const wrapper = shallow(<ArticleViewer/>);
        await act(async ()=>{
            jest.runAllImmediates()
        });
        console.log(wrapper.debug());
        expect(wrapper.debug()).toMatchSnapshot();
    })

});


describe("the server returns an empty list of articles",()=>{
    beforeEach(()=> {
        mock.onGet("data/").reply(200,
            []
        );
    });
    test("renders with no articles",()=>{
        const wrapper = shallow(<ArticleViewer/>);
        expect(wrapper.debug()).toMatchSnapshot();
    });
});

describe("the server returns 500 error",()=>{
    beforeEach(()=>{
        mock.onGet("data/").reply(500,
            mockError
        );
        jest.spyOn(React,"useEffect").mockImplementationOnce(f=>f());
    });
    afterEach(()=>{
        mock.reset();
    });
    test("renders", () => {
        const wrapper = shallow(<ArticleViewer/>);
        expect(wrapper.debug()).toMatchSnapshot();
    })
});

import React from "react";
import RankingPage from "./RankingPage";
import {shallow} from "enzyme/";
import {mockArticles, mockError, mockRankingArticles} from "./fixtures/articles";
import {act} from "@testing-library/react/";


test("renders",()=>{
    const wrapper = shallow(<RankingPage articles={mockRankingArticles} articleIDs={mockArticles}/>);
    expect(wrapper.debug).toMatchSnapshot();
});

describe("The server returns a post promise",()=>{
   test("returns set of article rankings",async(done)=>{
       jest.useFakeTimers();
       const wrapper = shallow(<RankingPage articles={mockRankingArticles} articleIDs={mockArticles}/>);
       wrapper.find("button.post-button").simulate('click');
       await act(async ()=>{
           jest.runAllImmediates();
       });
       wrapper.update();
       console.log(wrapper.debug());
       expect(wrapper.containsMatchingElement(<h1>Returned Post results</h1>)).toBeTruthy();
       done()
   })
});
describe("the server returns 500 server error",()=>{

    test("renders",()=>{
        //TODO Add more test
        expect(false).toBeTruthy;
    })
});
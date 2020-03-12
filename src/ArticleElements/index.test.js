import React from 'react';
import {mockParagraph,mockHeading,mockImage,mockListUnordered,mockListOrdered} from "../fixtures/elements";
import Paragraph from "./paragraph";
import Heading from "./heading";
import List from "./list";
import Image from "./image";







describe("the server returns 200 code",()=> {
    test("renders paragraph element",()=>{
        expect(Paragraph(mockParagraph)).toMatchSnapshot()
    });
    test("renders heading element",()=>{
        expect(Heading(mockHeading)).toMatchSnapshot()
    });
    test("renders image element",()=>{
        expect(Image(mockImage)).toMatchSnapshot()
    });
    describe("render lists",() =>{
        test("renders unordered list",()=>{
           expect(List(mockListUnordered)).toMatchSnapshot()
        });
        test("renders ordered list",()=>{
           expect(List(mockListOrdered)).toMatchSnapshot()
        });
    });
});
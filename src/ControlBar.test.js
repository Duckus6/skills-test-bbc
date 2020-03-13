import React from 'react';
import ControlBar from "./ControlBar";
import {shallow,mount} from "enzyme/";



test("renders",()=>{
    const wrapper = shallow(<ControlBar updateIndex={jest.fn()} index={0} total={5} />);
    expect(wrapper.debug()).toMatchSnapshot();
});

let mockUpdateIndex = null;
describe("Next arrow clicked",()=>{
    beforeEach(()=>{
        mockUpdateIndex = jest.fn();
    });
    test("Index increments", ()=>{
        jest.useFakeTimers();
        const wrapper = mount(<ControlBar updateIndex={mockUpdateIndex} index={0} total={5}/>);
        wrapper.find("button.next").simulate("click");
        wrapper.update();
        console.log(mockUpdateIndex);
        expect(mockUpdateIndex).toHaveBeenCalledWith(1);
    });

    test("Index does not increment when at max index", ()=>{
        jest.useFakeTimers();
        const wrapper = mount(<ControlBar updateIndex={mockUpdateIndex} index={4} total={5}/>);
        wrapper.find("button.next").simulate("click");
        wrapper.update();
        console.log(mockUpdateIndex);
        expect(mockUpdateIndex).toHaveBeenCalledWith(4);
    });
});



describe("Previous arrow clicked",()=>{
    beforeEach(()=>{
        mockUpdateIndex = jest.fn();
    });
    test("Index decrements", ()=>{
        jest.useFakeTimers();
        const wrapper = mount(<ControlBar updateIndex={mockUpdateIndex} index={4} total={5}/>);
        wrapper.find("button.previous").simulate("click");
        wrapper.update();
        console.log(mockUpdateIndex);
        expect(mockUpdateIndex).toHaveBeenCalledWith(3);
    });

    test("Index does not decrement when at max index", ()=>{
        jest.useFakeTimers();
        const wrapper = mount(<ControlBar updateIndex={mockUpdateIndex} index={0} total={5}/>);
        wrapper.find("button.previous").simulate("click");
        wrapper.update();
        console.log(mockUpdateIndex);
        expect(mockUpdateIndex).toHaveBeenCalledWith(0);
    });
});

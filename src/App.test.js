import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

test('renders', () => {
    const wrapper  = shallow(<App />);
    expect(wrapper.debug()).toMatchSnapshot();
});

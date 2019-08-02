import React from 'react';
import axios from 'axios';

import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16';
import {  mount, configure } from 'enzyme';

import Login from '../Components/Login.js'

jest.mock('axios');

configure({ adapter: new Adapter() });

it('renders Login comp', () => {
  const tree = renderer.create(<Login />).toTree;
  
  expect(tree).toMatchSnapshot();
})


it('Button submits form with valid data', () => {

  const getSpy = jest.spyOn(axios, 'get');

  const context = {};

  const wrapper = mount(<Login />, { context });

    const e = {
        target: [{
            value: "valid"
        },
        {
            value: "valid"
        }]
    };

    wrapper.find('[id="LoginForm"]').last().simulate("submit", e);

    const getPromise = getSpy.mock.results.pop().value;

    return getPromise.then(() => {
      
      const currentState = wrapper.state();

      wrapper.setContext({});

      expect(wrapper.contains(<p id="result">Logged In</p>)).toBe(true);
      
      expect(currentState.log.includes(("Logged In"))).toBe(true);
      
    })

});

it('Button submits form with invalid data', () => {

  const getSpy = jest.spyOn(axios, 'get');

  const context = {};

  const wrapper = mount(<Login />, { context });

    const e = {
        target: [{
            value: "invalid"
        },
        {
            value: "invalid"
        }]
    };

    wrapper.find('[id="LoginForm"]').last().simulate("submit", e);

    const getPromise = getSpy.mock.results.pop().value;

    return getPromise.then(() => {
      
      const currentState = wrapper.state();

      wrapper.setContext({});

      expect(wrapper.contains(<p id="result">Not Logged In</p>)).toBe(true);
      
      expect(currentState.log.includes(("Not Logged In"))).toBe(true);

    })

});
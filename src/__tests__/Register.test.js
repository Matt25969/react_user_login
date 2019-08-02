import React from 'react';
import axios from 'axios';

import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16';
import {  mount, configure } from 'enzyme';

import Register from '../Components/Register'

jest.mock('axios');

configure({ adapter: new Adapter() });

it('renders Register comp', () => {
  const tree = renderer.create(<Register />).toTree;
  
  expect(tree).toMatchSnapshot();
})

it('Button submits form with invalid username', () => {

  const postSpy = jest.spyOn(axios, 'post');

  const context = {};

  const wrapper = mount(<Register />, { context });

    const e = {
        target: [{
            value: "invalid"
        },
        {
            value: "valid"
        },
        {
            value: "valid"
        },
        {
            value: "valid"
        }]
    };

    wrapper.find('[id="RegisterForm"]').last().simulate("submit", e);

    const postPromise = postSpy.mock.results.pop().value;

    return postPromise.then(() => {
      
      const currentState = wrapper.state();

      wrapper.setContext({});

      expect(wrapper.contains(<p id="usernameError">Username field is required</p>)).toBe(true);
      
      expect(currentState.error.username=='Username field is required').toBe(true);

    })

});

it('Button submits form with invalid email', () => {

  const postSpy = jest.spyOn(axios, 'post');

  const context = {};

  const wrapper = mount(<Register />, { context });

    const e = {
        target: [{
            value: "valid"
        },
        {
            value: "invalid"
        },
        {
            value: "valid"
        },
        {
            value: "valid"
        }]
    };

    wrapper.find('[id="RegisterForm"]').last().simulate("submit", e);

    const postPromise = postSpy.mock.results.pop().value;

    return postPromise.then(() => {
      
      const currentState = wrapper.state();

      wrapper.setContext({});

      expect(wrapper.contains(<p id="emailError">Email field is required</p>)).toBe(true);
      
      expect(currentState.error.email=='Email field is required').toBe(true);

    })

});


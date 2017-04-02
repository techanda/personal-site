/* globals test expect */

import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Navbar from './Navbar'

test('Navbar snapshot test', () => {
  const component = shallow(<Navbar />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

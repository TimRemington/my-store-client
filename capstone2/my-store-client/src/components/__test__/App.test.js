import React from 'react'
import { shallow } from 'enzyme'
import App from '../../App'

import apiCalls from './apiCalls'

it('my fetchData Works', () => {
  const isTrue = true

  expect(isTrue).toBo(true)
})

test('<App /> renders without crashing', () => {
  shallow(<App />)
})

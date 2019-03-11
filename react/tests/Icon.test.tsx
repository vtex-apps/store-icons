import React from 'react'
import { render } from 'react-testing-library'

import Icon from '../components/Icon'

describe('Icon', () => {
  it('should match snapshot', () => {
    const component = render(<Icon id="tst-snapshot" size={20} />).asFragment()
    expect(component).toMatchSnapshot()
  })
})

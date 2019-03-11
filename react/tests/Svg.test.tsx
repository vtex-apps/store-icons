import React from 'react'
import { render } from 'react-testing-library'
import Svg from '../components/Svg'

describe('Svg', () => {
  it('should match snapshot', () => {
    const component = render(
      <Svg fill="black">
        <path />
      </Svg>
    ).asFragment()
    expect(component).toMatchSnapshot()
  })
})

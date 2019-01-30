import React from 'react'

const Svg = ({ children, ...props }) => (
  <svg {...props}>
    { children }
  </svg>
)

Svg.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}

export default Svg
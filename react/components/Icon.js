import React from 'react'
import { string } from 'prop-types'
import Use from './Use'
import Svg from './Svg'
import { proptypes } from './propTypes';

const Icon = ({ id, isActive, size, viewBox, activeClassName, mutedClassName, ...props }) => (
  <Svg
    fill='none'
    width={size}
    height={size}
    viewBox={viewBox}
    className={isActive ? activeClassName : mutedClassName}
    {...props}
  >
    <Use id={id} />
  </Svg>
)

Icon.defaultProps = {
  isActive: true,
  size: 16,
  viewBox: '0 0 16 16'
}

Icon.propTypes = {
  /** Icon SVG id */
  id: string.isRequired,
  ...proptypes
}

export default Icon

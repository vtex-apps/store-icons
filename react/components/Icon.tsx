import React from 'react'
import PropTypes from 'prop-types'
import Use from './Use'
import Svg from './Svg'
import { proptypes } from './propTypes'

const Icon = ({
  id,
  isActive,
  size,
  viewBox,
  activeClassName,
  mutedClassName,
}: IconProps) => (
  <Svg
    fill="none"
    width={size}
    height={size}
    viewBox={viewBox}
    className={isActive ? activeClassName : mutedClassName}
  >
    <Use id={id} />
  </Svg>
)

Icon.defaultProps = {
  isActive: true,
  size: 16,
  viewBox: '0 0 16 16',
}

Icon.propTypes = {
  /** Icon SVG id */
  id: PropTypes.string.isRequired,
  ...proptypes,
}

export default Icon

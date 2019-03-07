import React from 'react'

import Use from './Use'
import Svg from './Svg'

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

export default Icon

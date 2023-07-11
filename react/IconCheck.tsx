import React from 'react'
import { getType } from './utils/helpers'

import Icon from './components/Icon'

const IconCheck = ({ type, ...props }: EnhancedIconProps) => {
  const typeModifier = getType(type)
  return <Icon {...props}handle="checkIcon" id={`sti-check${typeModifier}`}   />
}

export default IconCheck

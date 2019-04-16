import React from 'react'
import { getType } from './utils/helpers'

import Icon from './components/Icon'

const IconCheck = ({ type, ...props }: EnhancedIconProps) => {
  const typeModifier = getType(type)
  return <Icon id={`sti-check${typeModifier}`} {...props} />
}



export default IconCheck

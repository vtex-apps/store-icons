import React from 'react'

import Icon from './components/Icon'
import { getType } from './utils/helpers'

const IconClose = ({ type, ...props }: EnhancedIconProps) => {
  const typeModifier = getType(type)
  return <Icon id={`sti-close${typeModifier}`} {...props} />
}

export default IconClose

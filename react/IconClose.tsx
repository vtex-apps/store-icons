import React from 'react'

import Icon from './components/Icon'
import { getType } from './utils/helpers'

const IconClose = ({ type = 'filled', ...props }: EnhancedIconProps) => {
  const typeModifier = getType(type)
  return <Icon  {...props} handle="closeIcon" id={`sti-close${typeModifier}`}/>
}

export default IconClose

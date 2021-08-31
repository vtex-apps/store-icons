import React from 'react'

import Icon from './components/Icon'
import { getType } from './utils/helpers'

const IconBoomark = ({ type = 'outline', ...props }: EnhancedIconProps) => {
  const typeModifier = getType(type, 'filled, outline')
  return <Icon {...props} id={`mpa-bookmark${typeModifier}`}/>
}

export default IconBoomark

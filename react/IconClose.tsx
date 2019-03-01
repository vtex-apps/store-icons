import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { getType } from './components/enhancers/helpers'

const IconClose = ({ type, ...props }: EnhancedIconProps) => {
  const typeModifier = getType(type)
  return <Icon id={`sti-close${typeModifier}`} {...props} />
}

IconClose.propTypes = proptypes

export default IconClose

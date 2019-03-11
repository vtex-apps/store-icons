import React from 'react'
import Icon from './components/Icon'
import { getOrientation } from './utils/helpers'

const IconCaret = ({ orientation, ...props }: EnhancedIconProps) => {
  const orientationModifier = getOrientation(orientation)
  return <Icon id={`nav-caret${orientationModifier}`} {...props} />
}

export default IconCaret

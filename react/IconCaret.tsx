import React from 'react'
import Icon from './components/Icon'
import { getOrientation } from './utils/helpers'

const IconCaret = ({ orientation, thin = false, ...props }: CaretProps) => {
  const orientationModifier = getOrientation(orientation)
  return <Icon id={`nav-${thin ? 'thin-' : ''}caret${orientationModifier}`} {...props} />
}

export default IconCaret

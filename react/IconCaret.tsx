import React from 'react'
import PropTypes from 'prop-types'
import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { getOrientation } from './components/helpers'

const IconCaret = ({ orientation, ...props }: EnhancedIconProps) => {
  const orientationModifier = getOrientation(orientation)
  return <Icon id={`nav-caret${orientationModifier}`} {...props} />
}

IconCaret.propTypes = {
  /** Orientation of the icon */
  orientation: PropTypes.string.isRequired,
  ...proptypes,
}

export default IconCaret

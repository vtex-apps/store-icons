import React from 'react'
import PropTypes from 'prop-types'
import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { withOrientation } from './components/enhancers'

const IconCaret = ({ oSuffix, ...props }) => {
  return (
    <Icon id={`nav-angle${oSuffix}`} {...props} />
  )
}

IconCaret.propTypes = {
  /** Orientation suffix */
  oSuffix: PropTypes.string.isRequired,
  ...proptypes
}

export default withOrientation(IconCaret)
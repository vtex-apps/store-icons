import React from 'react'
import PropTypes from 'prop-types'
import { find, propEq } from 'ramda'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconCaret = ({ orientation, ...props }) => {
  return (
    <Icon id={getOptionTitle(orientation)} {...props} />
  )
}

IconCaret.propTypes = {
  /** Defines caret orientation */
  orientation: PropTypes.string.isRequired,
  ...proptypes
}

export default IconCaret

const getOptionTitle = orientation => {
  return find(propEq('id', orientation), ORIENTATION_OPTS).value
}

const ORIENTATION_OPTS = [
  {
    id: 'up',
    value: 'nav-angle--up',
  },
  {
    id: 'down',
    value: 'nav-angle--down',
  },
  {
    id: 'right',
    value: 'nav-angle--right',
  },
  {
    id: 'left',
    value: 'nav-angle--left',
  },
]


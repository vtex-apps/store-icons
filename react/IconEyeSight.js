import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'ramda'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { withState, withType } from './components/enhancers'

const IconEyeSight = ({ type, state, ...props }) => {
  return <Icon id={`mpa-eyesight${type}${state}`} {...props} />
}

IconEyeSight.propTypes = {
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  ...proptypes,
}

export default compose(
  withState(),
  withType('filled, outline')
)(IconEyeSight)

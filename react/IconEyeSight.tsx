import React from 'react'
import PropTypes from 'prop-types'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { getType, getState } from './components/helpers'

const IconEyeSight = ({ type, state, ...props }: EnhancedIconProps) => {
  const typeModifier = getType(type, 'filled, outline')
  const stateModifier = getState(state)
  return <Icon id={`mpa-eyesight${typeModifier}${stateModifier}`} {...props} />
}

IconEyeSight.propTypes = {
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  ...proptypes,
}

export default IconEyeSight

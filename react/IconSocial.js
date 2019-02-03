import React from 'react'
import PropTypes from 'prop-types'
import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { withShape } from './components/enhancers'

const IconSocial = ({ network, ...props }) => {
  return <Icon id={`bnd-${network}`} {...props} />
}

IconSocial.propTypes = {
  /** Social network id */
  network: PropTypes.string.isRequired,
  ...proptypes,
}

export default withShape()(IconSocial)

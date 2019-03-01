import React from 'react'
import PropTypes from 'prop-types'
import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
//WITH SHAPE
const IconSocial = ({ network, ...props }: SocialIconProps) => {
  return <Icon id={`bnd-${network}`} {...props} />
}

IconSocial.propTypes = {
  /** Social network id */
  network: PropTypes.string.isRequired,
  ...proptypes,
}

export default IconSocial

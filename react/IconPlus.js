import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconPlus = ({ ...props }) => {
  return <Icon id="nav-plus" {...props} />
}

IconPlus.propTypes = proptypes

export default IconPlus

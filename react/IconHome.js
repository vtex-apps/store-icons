import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconHome = ({ ...props }) => {
  return (
    <Icon id="nav-home" {...props} />
  )
}

IconHome.propTypes = proptypes

export default IconHome
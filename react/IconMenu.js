import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconMenu = ({ ...props }) => {
  return (
    <Icon id="hpa-hamburguer-menu" {...props} />
  )
}

IconMenu.propTypes = proptypes


export default IconMenu
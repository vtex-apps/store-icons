import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconMinus = ({ ...props }) => {
  return (
    <Icon id="nav-minus" {...props} />
  )
}

IconMinus.propTypes = proptypes

export default IconMinus
import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconCart = (props: IconProps) => {
  return <Icon id="hpa-cart" {...props} />
}

IconCart.propTypes = proptypes

export default IconCart

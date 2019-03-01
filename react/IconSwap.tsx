import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconSwap = (props: IconProps) => {
  return <Icon id="mpa-swap" {...props} />
}

IconSwap.propTypes = proptypes

export default IconSwap

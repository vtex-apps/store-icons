
import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconEyeSightOn = ({ ...props }) => {
  return (
    <Icon id="mpa-s-eyesight--on" {...props} />
  )
}
IconEyeSightOn.propTypes = {
  ...proptypes
}

export default IconEyeSightOn
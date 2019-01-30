import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconEyeSightOff = ({ ...props }) => {
  return (
    <Icon id="mpa-s-eyesight--off" {...props} />
  )
}
IconEyeSightOff.propTypes = {
  ...proptypes
}

export default IconEyeSightOff

import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const EyeSightOffIcon = ({ ...props }) => {
  return (
    <Icon id="mpa-s-eyesight--off" {...props} />
  )
}
EyeSightOffIcon.propTypes = {
  ...proptypes
}

export default EyeSightOffIcon
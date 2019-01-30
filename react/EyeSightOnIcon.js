
import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const EyeSightOnIcon = ({ ...props }) => {
  return (
    <Icon id="mpa-s-eyesight--on" {...props} />
  )
}
EyeSightOnIcon.propTypes = {
  ...proptypes
}

export default EyeSightOnIcon
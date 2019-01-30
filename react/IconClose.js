import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconClose = ({ ...props }) => {
  return (
    <Icon id="sti-s-close" {...props} />
  )
}
IconClose.propTypes = {
  ...proptypes
}

export default IconClose
import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconSingleGrid = (props: IconProps) => {
  return <Icon id="mpa-single-item" {...props} />
}

IconSingleGrid.propTypes = proptypes

export default IconSingleGrid

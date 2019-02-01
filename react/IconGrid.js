import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconGrid = ({ ...props }) => {
  return (
    <Icon id="mpa-gallery" {...props} />
  )
}

IconGrid.propTypes = proptypes

export default IconGrid
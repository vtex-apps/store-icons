import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconSingleGrid = ({ ...props }) => {
  return (
    <Icon id="single-item-grid-search-result" {...props} />
  )
}

IconSingleGrid.propTypes = proptypes

export default IconSingleGrid
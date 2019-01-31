import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconGrid = ({ ...props }) => {
  return (
    <Icon id="grid-search-result" {...props} />
  )
}

IconGrid.propTypes = proptypes

export default IconGrid
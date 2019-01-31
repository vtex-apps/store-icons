import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconFilter = ({ ...props }) => {
  return (
    <Icon id="search-result-filter" {...props} />
  )
}

IconFilter.propTypes = proptypes

export default IconFilter
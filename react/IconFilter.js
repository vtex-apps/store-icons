import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconFilter = ({ ...props }) => {
  return <Icon id="mpa-filter-settings" {...props} />
}

IconFilter.propTypes = proptypes

export default IconFilter

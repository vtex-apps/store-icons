import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconSearch = (props: IconProps) => {
  return <Icon id="hpa-search" {...props} />
}

IconSearch.propTypes = proptypes

export default IconSearch

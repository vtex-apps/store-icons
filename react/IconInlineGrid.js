import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconInlineGrid = ({ ...props }) => {
  return (
    <Icon id="list-grid-search-result" {...props} />
  )
}

IconInlineGrid.propTypes = proptypes

export default IconInlineGrid
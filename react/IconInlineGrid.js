import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconInlineGrid = ({ ...props }) => {
  return <Icon id="mpa-list-items" {...props} />
}

IconInlineGrid.propTypes = proptypes

export default IconInlineGrid

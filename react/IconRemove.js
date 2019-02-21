import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconRemove = ({ ...props }) => {
  return <Icon id="mpa-remove" {...props} />
}

IconRemove.propTypes = proptypes

export default IconRemove

import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconProfile = ({ ...props }) => {
  return (
    <Icon id="hpa-profile" {...props} />
  )
}

IconProfile.propTypes = proptypes

export default IconProfile
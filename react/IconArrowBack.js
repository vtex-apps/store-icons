import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconArrowBack = ({ ...props }) => {
  return (
    <Icon id="hpa-arrow-back" {...props} />
  )
}

IconArrowBack.propTypes = proptypes

export default IconArrowBack
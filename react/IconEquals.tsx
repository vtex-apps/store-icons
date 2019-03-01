import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const IconEquals = (props: IconProps) => {
  return <Icon id="sti-equals" {...props} />
}

IconEquals.propTypes = proptypes

export default IconEquals

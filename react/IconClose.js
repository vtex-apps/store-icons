import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import withType from './components/enhancers/withType';

const IconClose = ({ type, ...props }) => {
  return (
    <Icon id={`sti-close${type}`} {...props} />
  )
}

IconClose.propTypes = proptypes

export default withType()(IconClose)
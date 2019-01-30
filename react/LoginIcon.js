
import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const LoginIcon = ({ ...props }) => {
  return (
    <Icon id="hpa-profile" {...props} />
  )
}
LoginIcon.propTypes = {
  ...proptypes
}

export default LoginIcon
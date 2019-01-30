
import React from 'react'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'

const ProfileIcon = ({ ...props }) => {
  return (
    <Icon id="hpa-profile" {...props} />
  )
}
ProfileIcon.propTypes = {
  ...proptypes
}

export default ProfileIcon
import React from 'react'
import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { withShape, enhance } from './components/enhancers'

const IconSocial = ({ network, ...props}) => {
    return (
        <Icon id={`soc-${network}`} {...props} />
    )
}

IconSocial.proptypes = proptypes

export default enhance(withShape)(IconSocial)
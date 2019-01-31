import React from 'react'
import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import withShape from './components/decorators/withShape'

const IconSocial = ({ network, ...props}) => {
    return (
        <Icon id={`soc-${network}`} {...props} />
    )
}

IconSocial.proptypes = proptypes

export default withShape(IconSocial)
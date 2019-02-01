import React from 'react'
import { getModifier } from './helpers'
import { ORIENTATIONS } from './options'

const withOrientation = Icon => ({ orientation, ...props }) => {
    return(
        <Icon oSuffix={getModifier(orientation, ORIENTATIONS)} {...props} />
    )
}

export default withOrientation
import React from 'react'
import { getModifier } from './helpers'
import { ORIENTATIONS } from './options'

const withOrientation = Icon => ({ orientation, ...props }) => {
    return(
        <Icon orientation={getModifier(orientation, ORIENTATIONS)} {...props} />
    )
}

export default withOrientation
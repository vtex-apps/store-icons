import React from 'react'
import { getModifier } from './helpers'
import { STATES } from './options'

const withState = Icon => ({ state, ...props }) => {
    return (
        <Icon state={getModifier(state, STATES)} {...props} />
    )
}

export default withState
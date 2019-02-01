import React from 'react'
import { getModifier } from './helpers'
import { TYPES } from './options'

const withType = Icon => ({ type, ...props }) => {
    return (
        <Icon type={getModifier(type, TYPES)} {...props} />
    )
}

export default withType
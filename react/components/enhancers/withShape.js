import React from 'react'
import { getModifier } from './helpers'
import { SHAPES } from './options';

const REDUCTION_PERCENTAGE = 0.4
const getReduction = size => size * REDUCTION_PERCENTAGE

const withShape = Icon => ({ shape, size, background, ...props }) => {
    
    if(!shape) return <Icon {...props} />

    const modifiers = getModifier(shape, SHAPES)
    const reduction = getReduction(size)
    const padding = reduction / 2
    const iconSize = size - reduction
     
    return(
        <span className={`${modifiers} flex`} style={{ padding: padding, backgroundColor: background }}>
            <Icon size={iconSize} {...props} />
        </span>
    )

}

export default withShape
import React from 'react'
import { find, propEq } from 'ramda'

const REDUCTION_PERCENTAGE = 0.4
const DEFAULT_SHAPES = [
    {
        id: 'square',
        modifiers: 'br1'
    },
    {
        id: 'rounded',
        modifiers: 'br3'
    },
    {
        id: 'circle',
        modifiers: 'br-100'
    }
]
const getReduction = size => size * REDUCTION_PERCENTAGE
const getModifiers = shape => {
    const defaultShape = find(propEq('id', shape), DEFAULT_SHAPES)
    return !!defaultShape
    ? defaultShape.modifiers
    : shape
}

const withShape = Icon => ({ shape, size, background, ...props }) => {
    
    if(!shape) return <Icon {...props} />

    const modifiers = getModifiers(shape)
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
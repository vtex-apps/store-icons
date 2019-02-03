import React from 'react'
import { getModifier, getSubset } from './helpers'
import { SHAPES } from './options'

const REDUCTION_PERCENTAGE = 0.4
const getReduction = size => size * REDUCTION_PERCENTAGE

const withShape = supported => Icon => ({
  shape,
  size,
  background,
  ...props
}) => {
  if (!shape) return <Icon {...props} />

  const supportedShapes = !!supported ? getSubset(supported, SHAPES) : SHAPES
  const modifiers = getModifier(shape, supportedShapes)
  const reduction = getReduction(size)
  const padding = reduction / 2
  const iconSize = size - reduction

  return (
    <span
      className={`${modifiers} flex`}
      style={{ padding: padding, backgroundColor: background }}
    >
      <Icon size={iconSize} {...props} />
    </span>
  )
}

export default withShape

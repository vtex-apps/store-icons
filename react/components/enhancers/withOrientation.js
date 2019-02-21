import React from 'react'
import { getModifier, getSubset } from './helpers'
import { ORIENTATIONS } from './options'

const withOrientation = supported => Icon => ({ orientation, ...props }) => {
  const supportedOrientations = !!supported
    ? getSubset(supported, ORIENTATIONS)
    : ORIENTATIONS

  return (
    <Icon
      orientation={getModifier(orientation, supportedOrientations)}
      {...props}
    />
  )
}

export default withOrientation

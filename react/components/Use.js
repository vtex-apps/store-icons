import React from 'react'
import { string } from 'prop-types'

const Use = ({ id, ...props }) => (
  <use href={`#${id}`} xlinkHref={`#${id}`} {...props} />
)

Use.propTypes = {
  id: string.isRequired,
}

export default Use

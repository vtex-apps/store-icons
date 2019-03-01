import React from 'react'
import PropTypes from 'prop-types'

interface Props {
  id: string
}

const Use = ({ id }: Props) => <use href={`#${id}`} xlinkHref={`#${id}`} />

Use.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Use

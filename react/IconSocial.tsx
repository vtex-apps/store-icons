import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { getShape } from './components/helpers'

interface Props extends EnhancedIconProps {
  readonly network: string
  readonly background: string
}

const IconSocial = ({ network, size, background, shape, ...props }: Props) => {
  const { wrapperProps, reducedIconSize } = getShape(size, background, shape)

  const shappedIcon = createElement(
    'span',
    ...wrapperProps,
    <Icon id={`bnd-${network}`} size={reducedIconSize} {...props} />
  )

  return shappedIcon
}

IconSocial.propTypes = {
  /** Social network id */
  network: PropTypes.string.isRequired,
  /** Background of the shape */
  background: PropTypes.string,
  ...proptypes,
}

export default IconSocial

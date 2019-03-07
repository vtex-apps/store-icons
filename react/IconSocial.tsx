import React from 'react'
import PropTypes from 'prop-types'

import Icon from './components/Icon'
import { proptypes } from './components/propTypes'
import { getShape } from './utils/helpers'

interface Props extends EnhancedIconProps {
  readonly network: string
  readonly background: string
}

const IconSocial = ({ network, size, background, shape, ...props }: Props) => {
  const { wrapperProps, reducedIconSize } = getShape(size!, background, shape)

  return (
    <span {...wrapperProps}>
      <Icon id={`bnd-${network}`} size={reducedIconSize} {...props} />
    </span>
  )
}

IconSocial.propTypes = {
  /** Social network id */
  network: PropTypes.string.isRequired,
  /** Background of the shape */
  background: PropTypes.string,
  ...proptypes,
}

IconSocial.defautProps = {
  size: 16,
  viewBox: '0 0 16 16',
}

export default IconSocial

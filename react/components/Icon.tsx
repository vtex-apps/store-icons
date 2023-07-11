import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

import Svg from './Svg'
import Use from './Use'

const CSS_HANDLES = [
  'arrowBackIcon',
  'assistantSalesIcon',
  'caretIcon',
  'cartIcon',
  'checkIcon',
  'closeIcon',
  'deleteIcon',
  'equalsIcon',
  'expandIcon',
  'eyeSightIcon',
  'filterIcon',
  'globeIcon',
  'gridIcon',
  'heartIcon',
  'homeIcon',
  'inlineGridIcon',
  'locationInputIcon',
  'locationMarkerIcon',
  'menuIcon',
  'minusIcon',
  'plusIcon',
  'profileIcon',
  'removeIcon',
  'searchIcon',
  'singleGridIcon',
  'socialIcon',
  'starIcon',
  'swapIcon',
  'playIcon',
  'pauseIcon',
  'volumeOnIcon',
  'volumeOffIcon',
  'icon'
] as const

const Icon = ({
  id,
  handle,
  isActive,
  size,
  viewBox,
  activeClassName,
  mutedClassName,
}: IconProps) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <Svg
      fill="none"
      width={size}
      height={size}
      viewBox={viewBox}
      className={`${isActive ? activeClassName || '' : mutedClassName || ''} ${
        handles[handle] || handles['icon']
      }`}
    >
      <Use id={id} />
    </Svg>
  )
}

Icon.defaultProps = {
  isActive: true,
  size: 16,
  viewBox: '0 0 16 16',
}

export default Icon

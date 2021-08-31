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
] as const

const Icon = ({
  id,
  handle,
  isActive,
  size,
  height,
  width,
  viewBox,
  activeClassName,
  mutedClassName,
}: IconProps) => {
  const {handles} = useCssHandles(CSS_HANDLES)

  const useCustomSize = height && width;

  return (
    <Svg
      fill="none"
      width={useCustomSize ? width : size}
      height={useCustomSize ? height : size}
      viewBox={ useCustomSize ? `0 0 ${width} ${height}`  : viewBox}
      className={`${isActive ? activeClassName || '' : mutedClassName || ''} ${
        handles[handle] || ''
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

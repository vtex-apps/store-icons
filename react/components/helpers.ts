import { find, propEq, contains } from 'ramda'
import { ORIENTATIONS, STATES, TYPES, SHAPES } from './enhancements'

/**
 * Get the modifer from any collection matching the rule collection{id, modifier}
 * @param {*} id
 * @param {*} collection
 */
export const getModifier = (collection: Array<Enhancement>, id?: string) => {
  const foundItem = find(propEq('id', id), collection)
  return !!foundItem ? foundItem.modifier : id
}

/**
 * Get a subset of the collections with given ids (passed with commas)
 * @param {*} tokens
 * @param {*} collection
 */
export const getSubset = (tokens: string, collection: Array<Enhancement>) => {
  const ids = tokens.split(',').join('')
  return collection.filter((item: any) => contains(item.id, ids))
}

export const getEnhancement = (
  enhancementList: Array<Enhancement>,
  enhancement?: string,
  supported?: string
) => {
  const supportedEnhancements = !!supported
    ? getSubset(supported, enhancementList)
    : enhancementList
  const modifier = getModifier(supportedEnhancements, enhancement)
  return modifier
}

export const getOrientation = (orientation?: string, supported?: string) =>
  getEnhancement(ORIENTATIONS, orientation, supported)

export const getType = (orientation?: string, supported?: string) =>
  getEnhancement(TYPES, orientation, supported)

export const getState = (orientation?: string, supported?: string) =>
  getEnhancement(STATES, orientation, supported)

const REDUCTION_PERCENTAGE = 0.4
const getReduction = (size: number) => size * REDUCTION_PERCENTAGE

export const getShape = (
  size: number,
  background: string,
  shape?: string,
  supported?: string
) => {
  const modifiers = getEnhancement(SHAPES, shape, supported)
  const reduction = getReduction(size)
  const padding = reduction / 2
  const reducedIconSize = size - reduction

  const wrapperProps = [
    { className: `${modifiers} flex` },
    { style: { padding: padding, backgroundColor: background } },
  ]

  return { wrapperProps, reducedIconSize }
}

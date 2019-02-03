import { find, propEq, contains } from 'ramda'

/**
 * Get the modifer from any collection matching the rule collection{id, modifier}
 * @param {*} id
 * @param {*} collection
 */
export const getModifier = (id, collection) => {
  const foundItem = find(propEq('id', id), collection)
  return !!foundItem ? foundItem.modifier : id
}

/**
 * Get a subset of the collections with given ids (passed with commas)
 * @param {*} tokens
 * @param {*} collection
 */
export const getSubset = (tokens, collection) => {
  const ids = tokens.split(',').join('')
  return collection.filter(item => contains(item.id, ids))
}

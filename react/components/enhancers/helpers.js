import { find, propEq } from 'ramda'

/**
 * Get the modifer from any collection matching the rule collection{id, modifier}
 * @param {*} id
 * @param {*} collection 
 */
export const getModifier = (id, collection) => {
    const foundItem = find(propEq('id', id), collection)
    return !!foundItem
    ? foundItem.modifier
    : id
}
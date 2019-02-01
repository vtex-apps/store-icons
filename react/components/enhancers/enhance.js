/**
 * Simple function composition
 * @param  {...any} functions 
 */
const enhance = (...functions) =>
functions.reduce((x, y) => (...args) => x(y(...args)), arg => arg)

export default enhance
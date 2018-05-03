/**
 * Get or Set the CSS value of the element supplied.
 * @name  css
 * @function
 * @param  {Node} element  The Node element whose CSS you wish to query.
 * @param  {String | Object} prop   The name of the CSS property in camelCase. eg. 'margin-left'
 * would be passed as 'marginLeft'.
 * @param  {String} value  Exclude the horizontal scrollbars height from the result.
 * @return {ishObject}     Returns the `ishObject` which called it. Method is chainable.
 * @example
 * css();
 */
export default function css(element, prop, value) {
  if (typeof prop === 'object') {
    Object.keys(prop).forEach((each) => {
      element.css(each, prop[each]);
    });
  } else if (element && !value) {
    // get the style
    let typeStr = prop;
    let lastIndex = 0;
    for (let i = 0; i < prop.length; i++) {
      const character = prop.charAt(i);

      if (character === character.toUpperCase()) {
        typeStr = `${prop.slice(lastIndex, i)}-${prop.slice(i).toLowerCase()}`;
        lastIndex = i;
        break;
      }
    }
    return element.style[prop] || window.getComputedStyle(element).getPropertyValue(typeStr);
  } else {
    // set the style
    element.style[prop] = value; // eslint-disable-line no-param-reassign
  }
  return element;
}

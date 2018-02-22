
/**
 * Gets an attributes value for the first element in the `ishObject`. If the second argument is
 * supplied the method sets an attribute and its value on all `Node`'s in the given `ishObject`.
 * @name  $.attr
 * @function
 * @param  {Node} element   The Node element whose CSS you wish to query.
 * @param  {String} name        A valid CSS attribute selector.
 * @param  {String} value       The attribute value to be set.
 * @return {ishObject|String}     If setting an attribute the method returns the `ishObject` which
 * called it and is chainable. If getting an attribute value the method will return the value found
 * or undefined if it's not found.
 *
 * @example
 * const element = querySelector('.element');
 * attr(element, 'attribute-name'); //get an attribute value
 * attr(element, 'attribute-name', 'attribute-value'); //set an attribute value
 */
function attr(element, name, value) {
  let returnVal;
  if (typeof value === 'string') {
    element[forEach]((el) => {
      el[0].setAttribute(name, value);
    });
    returnVal = this;
  } else if (this[0]) {
    returnVal = this[0].getAttribute(name);
  }
  return returnVal;
}

export default attr;

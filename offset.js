/**
 * Returns the left and top offset in pixels.
 * @name  offset
 * @function
 * @param  {Node} element   The Node element whose CSS you wish to query.
 * @return {Object}         An `Object` with values for left and top offsets in pixel values.
 * @example
 * const element = document.querySelector('#somElement');
 * offset(element);
 */

export default function offset(element) {
  let offsetLeft = 0;
  let offsetTop = 0;

  if (element && element.offsetParent) {
    offsetLeft = element.offsetLeft;
    offsetTop = element.offsetTop;
  }

  return {
    left: offsetLeft,
    top: offsetTop,
  };
}

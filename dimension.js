import css from './css';
/**
 * Gets the width or height of the given element.
 * @name  dimension
 * @function
 *
 * @param  {Node} element             The Node element whose CSS you wish to query.
 * @param  {String} type              'width' or 'height'.
 * @param  {Boolean} margins          Include margins in the return result.
 * @param  {Boolean} scrollbars        Include the scrollbars width/height from the result.
 * @return {Integer}                  The height of the element.
 *
 * @example
 * const element = document.querySelector('#somElement');
 *
 * // get the width of a Node
 * dimension(element, 'width');
 *
 * // get the height of the Node including the margins and scrollbar width
 * dimension(element, 'height', true, true);
 */
export default function dimension(element, type, margins = false, scrollbars = false) {
  let display;
  // if hidden display the item so we can get a measurement.
  if (element.selector !== (window || document)) {
    display = element.style.display;
    if (display === 'none') element.style.display = 'block';
  }
  let measurement = 0;
  let mt = 0;
  let mb = 0;
  if (margins) {
    mt = type === 'height' ? css(element,'marginTop') : css(element, 'marginLeft');
    mb = type === 'height' ? css(element, 'marginBottom') : css(element, 'marginRight');
    measurement = parseInt(mt, 10) + parseInt(mb, 10);
  }
  if (element === window) {
    measurement += type === 'height' ? element.outerHeight : element.outerWidth;
  } else if (!scrollbars) {
    measurement += type === 'height' ? element.clientHeight : element.clientWidth;
  } else {
    measurement += type === 'height' ? element.offsetHeight : element.offsetWidth;
  }
  // if element was hidden hide it again now we have a measurement.
  if (element.selector !== (window || document) && display === 'none') {
    element.style.display = 'none';
  }
  return measurement;
}

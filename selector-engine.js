

/**
 * Simple selector engine based on <code>querySelectorAll</code>.
 * @function
 * @param   {String|Node}   selector   A CSS Selector compatible with document.querySelectorAll or
 * a single `Node`.
 * @param   {ishObject|Array|NodeList|Node} context  Used to give a selector a search context.
 * @param   {String} forceSelector    Set the ish('selector').selector paramter forcibly.
 * @return  {ishObject}                A list of nodes with inherited library methods.
 * @example
 * ish('selector');
 * //filter the collection with some context of type Node || NodeList
 * ish('selector', Node);
 * ish('selector', NodeList);
 */
export default function $(selector, context, forceSelector) {
  context = context || document;

  let found;
  if (selector instanceof Node || selector === window || selector === document) {
    found = [selector];
    selector = forceSelector || selector;
  } else if (context.length) {
    found = [];
    let nodesFound;
    for (let i = 0; i < context.length; i++) {
      nodesFound = context[i].querySelectorAll(selector || '☺');
      // might be able to improve this....
      // https://blog.jscrambler.com/12-extremely-useful-hacks-for-javascript
      for (let el = 0; el < nodesFound.length; el++) {
        found.push(nodesFound[el]);
      }
    }
  } else {
    // querySelectorAll requires a string with a length
    // otherwise it throws an exception
    found = context.querySelectorAll(selector || '☺');
  }

  const { length } = found;
  const obj = {};
  for (let n = 0; n < length; n++) {
    obj[n] = found[n]; // || found;
  }

  /**
   * The number of items found in the collection.
   * @memberOf ishObject
   * @name  length
   */
  obj.length = length;
  /**
   * The selector string as given when calling ish(selector, context, forceSelector). This value
   * can be overridden if using the forceSelector parameter.
   * @memberOf ishObject
   * @name  selector
   */

  obj.selector = selector;
  /**
   * The context as given when calling ish(selector, context).
   * @memberOf ishObject
   * @name  context
   */
  obj.context = context;
  return obj;
}

// NEEDS custom forEach
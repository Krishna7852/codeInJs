const flatten = (list) => {
  return list.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
};
const aa = [1, 2, 3]; /*? */

console.log(flatten([1, 2, 3, [4, 3, 2, 1, [56, 34, 3]]])); //?.

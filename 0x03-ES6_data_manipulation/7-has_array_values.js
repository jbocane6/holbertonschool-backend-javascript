export default function hasValuesFromArray(set, array) {
  let hasElement = true;
  array.forEach((element) => {
    if (!set.has(element)) hasElement = false;
  });
  return (hasElement);
}

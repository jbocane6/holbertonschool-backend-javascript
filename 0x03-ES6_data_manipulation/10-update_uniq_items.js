export default function updateUniqueItems(groceryList) {
  if (!(groceryList instanceof Map)) throw Error('Cannot process');

  groceryList.forEach((value, key) => {
    if (value === 1) groceryList.set(key, 100);
  });
}

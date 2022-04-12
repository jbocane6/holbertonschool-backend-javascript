/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let tmpArray = '';
  const size = reportWithIterator.length;
  for (let i = 0; i < size; i++) {
    tmpArray += reportWithIterator[i];
    if (i < size - 1) {
      tmpArray += ' | ';
    }
  }
  return tmpArray;
}

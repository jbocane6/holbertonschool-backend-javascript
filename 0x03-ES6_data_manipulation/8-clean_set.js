export default function cleanSet(set, startString) {
  const size = startString.length;
  let str = '';

  if (startString === '') return ('');
  for (const element of set) {
    if (element.slice(0, size) === startString) {
      if (str === '') str = element.slice(size);
      else str = str.concat('-', element.slice(size));
    }
  }
  return (str);
}

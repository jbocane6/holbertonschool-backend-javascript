export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';
  let str = '';
  for (const element of set) {
    if (element && element.startsWith(startString)
    ) {
      str += str.length === 0 ? element.replace(startString, '') : element.replace(startString, '-');
    }
  }
  return str;
}

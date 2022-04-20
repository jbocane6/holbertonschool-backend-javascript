export default function createInt8TypedArray(length, position, value) {
  const int8 = new Int8Array(length);

  if (position >= length || position < 0) throw Error('Position outside range');
  int8[position] = value;
  return (new DataView(int8.buffer, 0, length));
}

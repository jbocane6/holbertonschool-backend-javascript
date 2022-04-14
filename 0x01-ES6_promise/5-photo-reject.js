/* eslint-disable */
export default function uploadPhoto(filename) {
  return new Promise(reject => {
    reject(new Error(`${filename} cannot be processed)`));
  })
}

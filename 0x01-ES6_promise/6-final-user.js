/* eslint-disable */
import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userTemp = await signUpUser(firstName, lastName).then((info) => ({
    status: 'fulfilled',
    value: info,
  }));

  const photoTemp = await uploadPhoto(fileName).catch((error) => ({
    status: 'rejected',
    value: error.toString(),
  }));

  return [userTemp, photoTemp];
}
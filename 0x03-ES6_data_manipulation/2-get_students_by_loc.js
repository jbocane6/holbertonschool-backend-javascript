export default function getStudentsByLocation(students, city) {
  return students.filter((results) => results.location === city);
}

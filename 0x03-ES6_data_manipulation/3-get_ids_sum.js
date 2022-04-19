export default function getStudentIdsSum(students) {
  return students.map((results) => results.id).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );
}

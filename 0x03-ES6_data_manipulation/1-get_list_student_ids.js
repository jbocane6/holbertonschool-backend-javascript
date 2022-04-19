export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  const listData = students.map((results) => results.id);
  return listData;
}

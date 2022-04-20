export default function updateStudentGradeByCity(students, city, newGrades) {
  return (students.filter((results) => results.location === city)
    .map((mapResult) => {
      const studentTemp = mapResult;
      const gradeTemp = newGrades.find((result) => result.studentId === mapResult.id);
      if (gradeTemp) studentTemp.grade = gradeTemp.grade;
      else studentTemp.grade = 'N/A';
      return studentTemp;
    }));
}

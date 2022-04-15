export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('name must be a String');
    if (typeof length !== 'number') throw TypeError('length must be a Number');
    if (!Array.isArray(students)) throw TypeError('students must be an Array');

    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('student must be a String');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(tempName) {
    if (typeof tempName !== 'string') throw TypeError('name must be a String');
    this._name = tempName;
  }

  get name() {
    return this._name;
  }

  set length(tempLength) {
    if (typeof tempLength !== 'number') throw TypeError('length must be a Number');
    this._length = tempLength;
  }

  get length() {
    return this._length;
  }

  set students(tempStudents) {
    if (!Array.isArray(tempStudents)) throw TypeError('students must be an Array');
    tempStudents.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('student must be a String');
    });
    this._students = tempStudents;
  }

  get students() {
    return this._students;
  }
}

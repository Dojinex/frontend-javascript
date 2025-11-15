/** TASK 1 — Teacher Interface */
interface Teacher {
  readonly firstName: string;   // readonly = cannot be modified after initialization
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional dynamic attributes e.g. contract: boolean
}

/** Example — OK */
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);

/** TASK 2 — Directors Interface Extending Teacher */
interface Directors extends Teacher {
  numberOfReports: number;
}

/** Example */
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

/** TASK 3 — printTeacher + function interface */

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // "John Doe"

/** TASK 4 — Student Interface + Class */

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

/** Example Test */
const student = new StudentClass({ firstName: "Mary", lastName: "Smith" });
console.log(student.displayName());
console.log(student.workOnHomework());

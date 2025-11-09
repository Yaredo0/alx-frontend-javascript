class StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: { firstName: string; lastName: string }) {
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

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

const student: StudentClassInterface = new StudentClass({ firstName: "Yared", lastName: "Gebremariam" });
console.log(student.displayName());
console.log(student.workOnHomework());
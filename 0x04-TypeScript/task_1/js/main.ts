// Interface for constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
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

// Example usage
const student = new StudentClass({ firstName: "Yared", lastName: "Gebremariam" });
console.log(student.displayName());      // Output: Yared
console.log(student.workOnHomework());   // Output: Currently working
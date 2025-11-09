interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName}. ${lastName}`;
}


function printTeacherFromObject({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return printTeacher(firstName, lastName);
}

// Example usage
console.log(printTeacherFromObject({ firstName: "John", lastName: "Doe" }));
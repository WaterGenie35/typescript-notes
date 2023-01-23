// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

class Student {
    fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string,
    ) {
        if (middleInitial === "") {
            this.fullName = `${firstName} ${lastName}`;
        } else {
            this.fullName = `${firstName} ${middleInitial} ${lastName}`;
        }
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return `Hi, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Test", "D.", "User");

document.body.textContent = greet(user);

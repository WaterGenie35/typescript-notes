// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        if (middleInitial === "") {
            this.fullName = "".concat(firstName, " ").concat(lastName);
        }
        else {
            this.fullName = "".concat(firstName, " ").concat(middleInitial, " ").concat(lastName);
        }
    }
    return Student;
}());
function greet(person) {
    return "Hi, ".concat(person.firstName, " ").concat(person.lastName);
}
var user = new Student("Test", "D.", "User");
document.body.textContent = greet(user);

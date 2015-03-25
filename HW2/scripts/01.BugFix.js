function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


var peter = new Person("Peter", "Jackson");
peter.lastName = "NAME";
console.log(peter.firstName);
console.log(peter.lastName);
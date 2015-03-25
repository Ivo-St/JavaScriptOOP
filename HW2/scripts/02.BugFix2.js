function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Object.defineProperty(Person.prototype, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    },
    set: function (value) {
        var names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
    }
});


var peter = new Person("Peter", "Jackson");
peter.lastName = "NAME";
console.log(peter.fullName);
console.log(peter.firstName);
console.log(peter.lastName);
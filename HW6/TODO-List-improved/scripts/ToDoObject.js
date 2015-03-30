var todoList = todoList || {};

(function () {
    var ToDoObject = function (name) {};

    ToDoObject.prototype.setName = function (value) {
        if (!(typeof value === 'string' || value instanceof String)) {
            throw new Error("Invalid name specified.");
        }

        if (value.length <= 0) {
            throw new Error("Name cannot be empty.");
        }

        this._name = value;
    };

    ToDoObject.prototype.getName = function () {
        return this._name;
    };

    todoList.ToDoObject = ToDoObject;

    return ToDoObject;
}());

var todoList = todoList || {};

(function () {
    function newContainer(name) {
        return new todoList.Container(name);
    }

    function newSection(title, caller) {
        return new todoList.Section(title, caller);
    }

    function newItem(description, caller) {
        return new todoList.Item(description, caller);
    }

    todoList.getContainer = newContainer;
    todoList.getSection = newSection;
    todoList.getItem = newItem;
}());

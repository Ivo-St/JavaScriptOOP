var todoList = todoList || {};

(function () {
    var CreateContainer = function (name) {
        this.setName(name);
        this.sections = [];
        this.addToDOM();
        this.createAddSectionButton();
    };

    CreateContainer.prototype = Object.create(todoList.ToDoObject.prototype);

    CreateContainer.constructor = CreateContainer;
    CreateContainer.prototype.createAddSectionButton = function () {
        var _this = this;

        function add() {
            _this.addSection(text.value);
            text.value = ""
        }

        var button = document.createElement("input");
        button.setAttribute("class", "buttonNewSection");
        button.setAttribute("type", "button");
        button.setAttribute("value", "New Section");
        button.onclick = add;

        var text = document.createElement("input");
        text.setAttribute("class", "textFieldSection");
        text.setAttribute("type", "text");
        text.setAttribute("placeholder", "Add New Section");

        document.getElementById(this.getName()).appendChild(text);
        document.getElementById(this.getName()).appendChild(button);
    };

    CreateContainer.prototype.addToDOM = function () {
        var node = document.createElement("div");
        node.setAttribute("id", this.getName());
        node.setAttribute("class", "container");
        var headLine = document.createElement("h2");
        var textNode = document.createTextNode(this.getName());
        headLine.appendChild(textNode);
        node.appendChild(headLine);
        var element = document.getElementById("container");
        element.appendChild(node);
        element.appendChild(document.createElement("br"));

    };

    CreateContainer.prototype.addSection = function (title) {
        var tst = todoList.getSection(title, this);
        this.sections.push(tst);
        tst.addToDOM();
    };

    todoList.Container = CreateContainer;

    return CreateContainer;
}());

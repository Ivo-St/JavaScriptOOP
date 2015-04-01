var todoList = todoList || {};

require(['ToDoObject', 'factory'], function () {
    return (function () {
        var CreateContainer = function (name) {
            this.setName(name);
            this.sections = [];
            this.addToDOM();
            this.createAddSectionButton();
        };

        CreateContainer.prototype = Object.create(todoList.ToDoObject.prototype);
        CreateContainer.constructor = CreateContainer;

        CreateContainer.prototype.createAddSectionButton = function () {
            var _this,
                button,
                text;

            _this = this;

            function add() {
                _this.addSection(text.value);
                text.value = "";
            }

            button = document.createElement("input");
            button.setAttribute("class", "buttonNewSection");
            button.setAttribute("type", "button");
            button.setAttribute("value", "New Section");
            button.onclick = add;

            text = document.createElement("input");
            text.setAttribute("class", "textFieldSection");
            text.setAttribute("type", "text");
            text.setAttribute("placeholder", "Add New Section");

            document.getElementById(this.getName())
                .appendChild(text);
            document.getElementById(this.getName())
                .appendChild(button);
        };

        CreateContainer.prototype.addToDOM = function () {
            var node,
                headLine,
                textNode,
                element;

            node = document.createElement("div");
            headLine = document.createElement("h2");
            textNode = document.createTextNode(this.getName());

            node.setAttribute("id", this.getName());
            node.setAttribute("class", "container");

            element = document.getElementById("container");

            headLine.appendChild(textNode);
            node.appendChild(headLine);
            element.appendChild(node);
            element.appendChild(document.createElement("br"));

        };

        CreateContainer.prototype.addSection = function (title) {
            var section = todoList.getSection(title, this);
            this.sections.push(section);
            section.addToDOM();
        };

        todoList.Container = CreateContainer;

        return CreateContainer;
    }());
});

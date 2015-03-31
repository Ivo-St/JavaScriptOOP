var todoList = todoList || {};

(function () {
    var CreateSection = function (title, caller) {
        this.setName(title);
        this._caller = caller;
        this.items = [];
    };

    CreateSection.prototype = Object.create(todoList.ToDoObject.prototype);
    CreateSection.constructor = CreateSection;

    CreateSection.prototype.createAddItemButton = function () {
        var button,
            text,
            _this = this;

        function add() {
            _this.addItem(text.value);
            text.value = "";
        }

        button = document.createElement("input");
        button.setAttribute("class", "buttonNewSection");
        button.setAttribute("type", "button");
        button.setAttribute("value", "New Item");
        button.onclick = add;

        text = document.createElement("input");
        text.setAttribute("class", "textFieldSection");
        text.setAttribute("type", "text");
        text.setAttribute("placeholder", "Add New Item");

        document.getElementById(this.getName())
            .appendChild(text);
        document.getElementById(this.getName())
            .appendChild(button);
    };

    CreateSection.prototype.addToDOM = function () {
        var node,
            headLine,
            textNode,
            element;

        node = document.createElement("div");
        node.setAttribute("id", this.getName());
        node.setAttribute("class", "section");

        headLine = document.createElement("h4");

        textNode = document.createTextNode(this.getName());

        headLine.appendChild(textNode);
        node.appendChild(headLine);

        element = document.getElementById(this._caller.getName());
        if (element === null) {
            throw new Error("Could not add section to DOM.");
        }

        element.appendChild(node);

        this.createAddItemButton();
    };

    CreateSection.prototype.addItem = function (description) {
        var item = todoList.getItem(description, this);
        this.items.push(item);
        item.addToDOM();
    };

    todoList.Section = CreateSection;

    return CreateSection;
}());

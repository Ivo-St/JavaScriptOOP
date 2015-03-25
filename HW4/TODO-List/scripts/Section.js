todoList = todoList || {};

(function () {
    var CreateSection = function (title, caller) {
        this.setName(title);
        this._caller = caller;
        this.items = [];
    };

    CreateSection.prototype = Object.create(todoList.ToDoObject.prototype);
    CreateSection.constructor = CreateSection;

    CreateSection.prototype.createAddItemButton = function () {
        var _this = this;

        function add() {
            _this.addItem(text.value);
            text.value = ""
        }

        var button = document.createElement("input");
        button.setAttribute("class", "buttonNewSection");
        button.setAttribute("type", "button");
        button.setAttribute("value", "New Item");
        button.onclick = add;

        var text = document.createElement("input");
        text.setAttribute("class", "textFieldSection");
        text.setAttribute("type", "text");
        text.setAttribute("placeholder", "Add New Item");

        document.getElementById(this.getName()).appendChild(text);
        document.getElementById(this.getName()).appendChild(button);
    };

    CreateSection.prototype.addToDOM = function () {
        var node = document.createElement("div");
        node.setAttribute("id", this.getName());
        node.setAttribute("class", "section");
        var headLine = document.createElement("h4");
        var textNode = document.createTextNode(this.getName());
        headLine.appendChild(textNode);
        node.appendChild(headLine);
        var element = document.getElementById(this._caller.getName());
        if (element === null) {
            throw new Error("Test error");
        }
        element.appendChild(node);

        this.createAddItemButton();
    };

    CreateSection.prototype.addItem = function (description) {
        var tmp = new todoList.Item(description, this);
        this.items.push(tmp);
        tmp.addToDOM();
    };

    todoList.Section = CreateSection;

    return CreateSection;
}());
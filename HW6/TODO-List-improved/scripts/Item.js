var todoList = todoList || {};

(function () {
    var CreateItem = function (description, caller) {
        this.setName(description);
        this._caller = caller;
    };

    CreateItem.prototype = Object.create(todoList.ToDoObject.prototype);
    CreateItem.constructor = CreateItem;

    function handleChecked() {
        if (this.checked) {
            this.nextSibling.style.background = "green";
            this.nextSibling.style.boxShadow = "1px 1px 5px #2C2A2A";
            this.nextSibling.style.fontStyle = "italic";
        } else {
            this.nextSibling.style.background = "none";
            this.nextSibling.style.boxShadow = "none";
            this.nextSibling.style.fontStyle = "normal";
        }
    }

    CreateItem.prototype.addToDOM = function () {
        var node,
            text,
            textNode,
            element,
            wrapper;

        node = document.createElement("input");
        text = document.createElement('label');
        textNode = document.createTextNode(this.getName());
        wrapper = document.createElement("div");

        node.setAttribute("type", "checkbox");
        node.setAttribute("id", this._caller.items.length.toString() + this._caller.getName());
        node.setAttribute("class", "item");
        node.onchange = handleChecked;

        text.setAttribute("class", "label");
        text.htmlFor = this._caller.items.length.toString() + this._caller.getName();

        text.appendChild(textNode);

        element = document.getElementById(this._caller.getName());
        if (element === null) {
            throw new Error("Cannot attach element to DOM tree.");
        }

        wrapper.setAttribute("class", "wrapper");

        wrapper.appendChild(node);
        wrapper.appendChild(text);
        element.appendChild(wrapper);
    };

    todoList.Item = CreateItem;

    return CreateItem;
}());

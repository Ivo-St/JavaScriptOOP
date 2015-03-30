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
        var node = document.createElement("input");
        node.setAttribute("type", "checkbox");
        node.setAttribute("id", this._caller.items.length.toString() + this._caller.getName());
        node.setAttribute("class", "item");
        node.onchange = handleChecked;

        var text = document.createElement('label');
        text.setAttribute("class", "label");
        text.htmlFor = this._caller.items.length.toString() + this._caller.getName();

        var textNode = document.createTextNode(this.getName());
        text.appendChild(textNode);

        var element = document.getElementById(this._caller.getName());
        if (element === null) {
            throw new Error("Cannot attach element to DOM tree.");
        }

        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper");
        element.appendChild(wrapper);
        wrapper.appendChild(node);
        wrapper.appendChild(text);
    };

    todoList.Item = CreateItem;

    return CreateItem;
}());

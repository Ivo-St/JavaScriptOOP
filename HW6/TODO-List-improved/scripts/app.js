//todo implement requireJS
var todoList = todoList || {};

(function () {
    function createContainer() {
        var name = document.getElementById("createCont").value;
        document.getElementById("createCont")
            .value = "";
        todoList.getContainer(name);
    }

    function run() {
        var fragment = new DocumentFragment();
        var container = document.createElement("div");
        container.setAttribute('id', 'container');

        var buttonWrapper = document.createElement('div');
        buttonWrapper.setAttribute('id', 'buttonWrapper');

        var inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('id', 'createCont');
        inputText.setAttribute('placeholder', 'Create New Container');

        var inputButton = document.createElement('input');
        inputButton.setAttribute('type', 'button');
        inputButton.setAttribute('value', 'New Container');
        inputButton.onclick = createContainer;


        buttonWrapper.appendChild(inputText);
        buttonWrapper.appendChild(inputButton);
        buttonWrapper.appendChild(document.createElement('br'));
        container.appendChild(buttonWrapper);
        fragment.appendChild(container);
        var body = document.getElementsByTagName('body')[0];
        console.log(body);
        body.appendChild(fragment);
    }

    run();
}());

var todoList = todoList || {};

require(['container'], function (getContainer) {
    return (function () {
        function createContainer() {
            var name = document.getElementById("createCont").value;
            document.getElementById("createCont")
                .value = "";
            todoList.getContainer(name);
        }

        function run() {
            var fragment = new DocumentFragment(),
                container = document.createElement("div"),
                body = document.getElementsByTagName('body')[0],
                buttonWrapper = document.createElement('div'),
                inputText = document.createElement('input'),
                inputButton = document.createElement('input');

            container.setAttribute('id', 'container');
            buttonWrapper.setAttribute('id', 'buttonWrapper');
            inputText.setAttribute('type', 'text');
            inputText.setAttribute('id', 'createCont');
            inputText.setAttribute('placeholder', 'Create New Container');
            inputButton.setAttribute('type', 'button');
            inputButton.setAttribute('value', 'New Container');

            inputButton.onclick = createContainer;

            buttonWrapper.appendChild(inputText);
            buttonWrapper.appendChild(inputButton);
            buttonWrapper.appendChild(document.createElement('br'));
            container.appendChild(buttonWrapper);
            fragment.appendChild(container);
            body.appendChild(fragment);
        }

        run();
    }());
});

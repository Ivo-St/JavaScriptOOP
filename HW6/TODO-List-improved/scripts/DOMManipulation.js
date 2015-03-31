var todoList = todoList || {};

define('DOMManipulation', function () {
    (function domManipulation() {
        function isDOM(element) {
            return element.nodeType === document.ELEMENT_NODE;
        }

        function appendChild(element, child) {
            element = transformToDOM(element);
            child = transformToDOM(child);

            for (var i = 0; i < element.length; i++) {
                for (var j = 0; j < child.length; j++) {
                    child[j] = child[j].cloneNode(true);
                    element[i].appendChild(child[j]);
                }
            }
        }

        function transformToDOM(element) {
            if (!isDOM(element)) {
                element = retrieveElements(element);
            } else {
                element = [element];
            }
            return element;
        }

        function removeChild(element, child) {
            element = transformToDOM(element);
            child = transformToDOM(child);

            for (var i = 0; i < element.length; i++) {
                for (var j = 0; j < child.length; j++) {
                    if (child[j].parentNode == element[i]) {
                        element[i].removeChild(child[j]);
                    }
                }
            }
        }

        function retrieveElements(selector) {
            return document.querySelectorAll(selector);
        }

        function addEvent(element, eventType, eventHandler) {
            var elements = transformToDOM(element);

            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener(eventType, eventHandler);
            }
        }

        todoList.DOMManipulation = {
            appendChild: appendChild,
            removeChild: removeChild,
            addHandler: addEvent,
            retrieveElements: retrieveElements
        };

    }());
});

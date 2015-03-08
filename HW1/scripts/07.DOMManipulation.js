var domManipulation = (function domManipulation() {
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
        }
        else {
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

    function retrieveElements(selector){
        return document.querySelectorAll(selector);
    }

    function addEvent(element, eventType, eventHandler) {
        var elements = transformToDOM(element);

        for(var i = 0; i < elements.length; i++) {
            elements[i].addEventListener(eventType,eventHandler);
        }
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addEvent,
        retrieveElements: retrieveElements
    };

}());

function testAppendChild() {
    var node = document.createElement("h1");
    var textnode = document.createTextNode("Append Child Test");
    node.appendChild(textnode);
    domManipulation.appendChild("h2", node);
}

function testRemoveChild() {
    domManipulation.removeChild("h2", "h1");
}

function testRetrieveElements(){
    alert("Check console");
    console.log(domManipulation.retrieveElements("h1"));
}

function testAddHandler(){
    domManipulation.addHandler("h1","click",function(){alert("Event")});
}
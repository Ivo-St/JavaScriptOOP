//to execute this problem open index.html(it is in the mother folder) and look in the web console

function domTraversal(selector) {
    var selectedElements = document.querySelectorAll(selector);
    console.log(selectedElements);

    for(var i=0; i<selectedElements.length;i++){
        printChildes(selectedElements[i],"");
    }

    function printChildes(element, spacing) {
        for(var j=0; j<element.childNodes.length;j++){
            if (element.childNodes[j].nodeType === document.ELEMENT_NODE) {
                var result = spacing + element.childNodes[j].nodeName+": ";

                if(element.childNodes[j].id){
                    result+="id=\""+element.childNodes[j].id+"\"";
                }

                if(element.childNodes[j].className){
                    result+="class=\""+element.childNodes[j].className+"\"";
                }

                console.log(result);

                if (element.childNodes[j].hasChildNodes()) {
                    printChildes(element.childNodes[j], spacing + " ");
                }
            }
        }
    }
}


window.onload = function beginTraversal() {
    domTraversal(".birds");
}
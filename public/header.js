console.log('starting header.js');

document.addEventListener("DOMContentLoaded", function() {
    console.log('header.js onload');
    fetch("./header.html").then(function(res) {
            // res instanceof Response == true.
            if (res.ok) {
                res.text().then(function(data) {    
                    let element = document
                        .createElement("header");
                    element.className = "header";
                    element.innerHTML = data; 
                    console.log(element.getHTML());   
                    document
                        .body
                        .prepend(element);             
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", res.status);
            }
        }, 
        function(e) {
            console.log("Fetch failed!", e);
        }
    );
});
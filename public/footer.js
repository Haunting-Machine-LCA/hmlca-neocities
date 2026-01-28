console.log('starting footer.js');

document.addEventListener("DOMContentLoaded", function() {
    console.log('footer.js onload');
    fetch("./footer.html").then(function(res) {
            // res instanceof Response == true.
            if (res.ok) {
                res.text().then(function(data) {    
                    let element = document
                        .createElement("footer");
                    element.className = "footer";
                    element.innerHTML = data; 
                    console.log(element.getHTML());   
                    document
                        .body
                        .append(element);          
                    element.classList.add("loaded");   
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
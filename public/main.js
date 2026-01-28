console.log('starting main.js');
import { openModalLinksOnAllWipLinks } from './wipmodalfunc.js';

let isMouseOverLogo = false;
const logos = [
    // "images/logo-a.png",
    // "images/logo-b-normal.png",
    "images/logo-c-normal.png",
    // "images/logo-d.png",
    // "images/logo-e.png",
    "images/logo-f-normal.png",
    "images/logo-g-normal.png",
    // "images/logo-h.png",
];

function nextLogo(index, force = false) {

    const timeoutMillis = 666; // milliseconds
    if (isMouseOverLogo || force) {
        const logoImage = document.getElementById("logo-image");
        logoImage.src = logos[index % logos.length];
        index = index + 1;
    }
    setTimeout(nextLogo, timeoutMillis,  index);
}


document.addEventListener("DOMContentLoaded", async function() {
    console.log('main.js loaded');
    await fetch("./main.html").then(function(res) {
            // res instanceof Response == true.
            if (res.ok) {
                res.text().then(function(data) {    
                    let main = document.getElementById("main");
                    if (main == null)
                        return;
                    main.innerHTML = data; 
                    main.classList.add("loaded");
                    console.log(main.getHTML());   

                    const logoImage = document.getElementById("logo-image");
                    logoImage.addEventListener("mouseenter", function() {
                        isMouseOverLogo = true;
                    });
                    logoImage.addEventListener("mouseleave", function() {
                        isMouseOverLogo = false;
                    });
                    
                    let startLogoIndex = Math.floor(Math.random() * logos.length);
                    nextLogo(startLogoIndex, true);     
                    openModalLinksOnAllWipLinks();      
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
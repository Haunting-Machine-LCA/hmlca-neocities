console.log('starting index.js');


const displayOpacity = 0.4;
const defaultImage = "images/bmtsweird.png";
let currentImage = "images/snarler-trans_hyperred.png";


function setImage(element, image, opacity) {
    const previous = element.style.display;
    // element.style.display = 'none';
    element.src = image;
    element.style.opacity = opacity;
    element.style.display = previous;
    // console.log('setting opacity ' + opacity);
}

function setupWiggle() {
    const wiggles = this.document.getElementsByClassName("wiggle");
    const wiggleStart = [-0.2, -0.8, -0.5];
    const wiggleArr = Array.from(wiggles);
    function wiggleLoop(timestamp) {
        let time = performance.now() * 0.001;
        const maxWiggle = 0.1;
        wiggleArr.forEach((element) => {
            let style = window.getComputedStyle(element);
            let delayStr = style.getPropertyValue('animation-delay');
            let delay = delayStr.substring(0, delayStr.length - 1);
            let wiggleOffset = parseFloat(delay);
            let oscillationValue = Math.sin(time+ wiggleOffset);
            // console.log(`wo=${wiggleOffset}, ov=${oscillationValue}, time=${time}`)
            let x = wiggleStart[0] + (oscillationValue * maxWiggle); 
            let y = wiggleStart[1] + (oscillationValue * maxWiggle); 
            let z = wiggleStart[2] + (oscillationValue * maxWiggle); 
            let d = 15+oscillationValue;
            let transform = `rotate3d(${x}, ${y}, ${z}, ${d}deg)`;
            // console.log(transform);
            element.parentElement.style.transform = transform;
        });
        window.requestAnimationFrame(wiggleLoop);
    }
    window.requestAnimationFrame(wiggleLoop);
}


function setupNavImages() {
    const container = this.document.getElementById("nav-wrapper");
    const placeholderImage = this.document.getElementById("placeholder-image");
    const projectImage = this.document.getElementById("project-image");
    const projectNavs = this.document.getElementsByClassName("project-nav");
    const navArr = Array.from(projectNavs);
    navArr.forEach((element) => {
        let image;
        switch (element.id) {
            case "man-eat-man-nav":
                image = "images/snarler-trans_hyperred.png"
                break;
            case "blog-nav":
                image = "images/thoth-trans_hyperred.png"
                break;
            case "contact-nav":
                image = "images/herald-trans_hyperred.png"
                break;
        }
        element.onmouseenter = function() { 
            setImage(projectImage, image, displayOpacity); 
            currentImage = image;
        };
        // element.onmouseleave = function() { 
        //     setImage(projectImage, image, 0); 
        // };
    });
    container.onmouseenter = function() {
        setImage(placeholderImage, defaultImage, 0);
    };
    container.onmouseleave = function() {
        setImage(placeholderImage, defaultImage, displayOpacity);
        setImage(projectImage, currentImage, 0);
    };
    setImage(placeholderImage, defaultImage, displayOpacity);
} 


function startLoadAnimations() {
    let navContainer = this.document.getElementsByClassName("nav-link-container")[0];
    navContainer.classList.add("loaded");

    function startLoad(element) {
        if (element == null)
            return;
        element.classList.add("loaded");
    }

    const projectContainers = this.document.getElementsByClassName("project-container");
    const containerArr = Array.from(projectContainers);
    const delaySeconds = 0.18;
    let i = 0;
    containerArr.forEach((element) => {
        let delayMilliseconds = delaySeconds * i * 1000;
        setTimeout(() => startLoad(element), delayMilliseconds);
        i = i + 1;
    });

    let video = this.document.getElementById("placeholder-video");
    startLoad(video);
    let logo = this.document.getElementsByClassName("logo")[0];
    startLoad(logo);
}


document.addEventListener("DOMContentLoaded", function() {
    console.log('index.js onload');

    setupNavImages();
    setupWiggle();
    startLoadAnimations();
});
const showForMillis = 2500;
const addedElements = new Set();
let currentTimeout = null;

function openWipModal(modalElement) {
    modalElement.style.display = 'block';
    modalElement.style.opacity = '100%';
}


function closeWipModal(modalElement) {
    modalElement.style.display = 'none';
    modalElement.style.opacity = '0%';
}


function openModalOnLinkClick(element) {
    console.log('adding wip modal callback to element ' + element.innerHTML);
    addedElements.add(element);
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const modalElement = document.getElementById('wip');
        openWipModal(modalElement);
        if (currentTimeout != null) {
            clearTimeout(currentTimeout);
        }
        currentTimeout = setTimeout(() => closeWipModal(modalElement), showForMillis);
    });
}


function openModalLinksOnAllWipLinks() {
    const wipElements = document.querySelectorAll('.wip-link');
    const arr = Array.from(wipElements)
        .filter(e => !addedElements.has(e));

    console.log('wip links found: ', arr.length);

    arr.forEach(openModalOnLinkClick);
}


export { 
    openWipModal,
    closeWipModal,
    openModalLinksOnAllWipLinks,
    openModalOnLinkClick
};
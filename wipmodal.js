import { openModalLinksOnAllWipLinks } from './wipmodalfunc.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('wipmodal.js loaded');
    const modal = document.createElement('template');
    modal.innerHTML = `
    <section id="wip" class="modal">
        <div class="modal-content">
            <h2>Work In Progress</h2>
            <p>This link is temporarily unavailable as this site is under construction.</p>
            <p>Thanks for understanding. :)</p>
            <!--
            <button class="close-button" 
                onclick="
                    const element = document.getElementById('wip'); 
                    element.style.display='none';
                    element.style.opacity='0%';
            ">Close</button>
            -->
        </div>
    </section>
    `;

    await document.body.append(modal.content);
    openModalLinksOnAllWipLinks();
});
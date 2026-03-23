console.log('socials.js loaded');

const socials = document.createElement('template');

socials.innerHTML = `
<section class="socials">
    <a href="https://bsky.app/profile/hmlca.bsky.social" target="_blank" rel="noopener noreferrer">bluesky</a>
    <br/>
    <a href="https://www.tumblr.com/hauntingmachinelca" target="_blank" rel="noopener noreferrer">tumblr</a>
    <br/>
    <a href="https://www.youtube.com/@hauntingmachinelca" target="_blank" rel="noopener noreferrer">youtube</a>
    <br/>
    <a href="https://www.tiktok.com/@hmlca" target="_blank" rel="noopener noreferrer">tiktok</a>
</section>
`;

document.body.append(socials.content);
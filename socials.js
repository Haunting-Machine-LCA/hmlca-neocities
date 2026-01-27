console.log('socials.js loaded');

const socials = document.createElement('template');

socials.innerHTML = `
<section class="socials">
    <a href="https://bsky.app/profile/hmlca.bsky.social">bluesky</a>
    <br/>
    <a href="https://www.tumblr.com/hauntingmachinelca">tumblr</a>
    <br/>
    <a href="https://www.tumblr.com/hauntingmachinelca">instagram</a>
    <br/>
    <a href="https://www.tumblr.com/hauntingmachinelca">tiktok</a>
</section>
`;

document.body.append(socials.content);
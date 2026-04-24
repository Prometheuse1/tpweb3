import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject();

const toogle = document.getElementById("toogle");
const navbar = document.getElementById("navbar");

toogle.addEventListener("click", () => {
    navbar.classList.toggle("apparait");
});

import { titleCase } from "./title-case.min.js";

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("quote");
    const quoteBody = container.getElementsByTagName("div")[0];
    const authorBody = container.getElementsByTagName("h2")[0];

    const res = await fetch("https://dummyjson.com/quotes/random");
    if (!res.ok) return;
    const body = await res.json();


    quoteBody.innerHTML = `
    <p style="font-size: 4rem; font-family: fantasy; height: 2rem">“</p>
    <h1>${titleCase(body.quote)}</h1>
    <p style="font-size: 4rem; font-family: fantasy; height: 2rem">”</p>`;
    authorBody.textContent = `-${body.author}`;
});

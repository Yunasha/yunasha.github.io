document.addEventListener("DOMContentLoaded", async () => {
    const gallery = document.getElementById("gallery");
    const grid = gallery.getElementsByClassName("main-gallery")[0];
    const prev = gallery.getElementsByClassName("gallery-preview-margin")[0];

    const res = await fetch("./src/js/images.json");
    if (!res.ok) return;
    const body = await res.json();
    console.log(body);

    const gridFragment = document.createDocumentFragment();

    body.forEach((row) => {
        const wrapper = document.createElement("div");

        const img = document.createElement("img");
        img.src = `./src/img/art/thumbnail/${row.url}_thumb.webp`;
        img.image_pair = row.url;
        img.loading = "lazy";

        img.addEventListener("click", () => {

            const prevImg = prev.getElementsByTagName("img")[0];
            const prevTitle = prev.getElementsByTagName("h2")[0];
            const prevdesc = prev.getElementsByTagName("p")[0];
            
            if (img.image_pair == prevImg.image_pair) {
                prev.classList.toggle("gone");
            } else {
                prev.classList.remove("gone")
            }

            
            gallery.querySelectorAll(".main-gallery img").forEach((el) => {
                el.classList.remove("active-tab");
            });

            prevImg.src = `./src/img/art/${row.url}.png`;
            prevImg.image_pair = row.url;
            prevImg.onload = () => {
                prevTitle.textContent = row.title;
                prevdesc.textContent = row.description

                // add active-tab to the clicked thumbnail
                if (!prev.classList.contains("gone")) {
                    img.classList.add("active-tab");
                    prev.scrollIntoView({
                        behavior: "instant",
                        block: "center",
                    });
                }
            }

        });

        const name = document.createElement("p");
        name.textContent = row.title;

        wrapper.appendChild(img);
        wrapper.appendChild(name);
        gridFragment.appendChild(wrapper);
    });

    grid.innerHTML = "";
    grid.appendChild(gridFragment);
});

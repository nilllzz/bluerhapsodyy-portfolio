/**
 * @typedef {{name:string,url:string}} Person
 * @typedef {{x:number,y:number}} AspectRatio
 * @typedef {{imgUrl:string,title:string,people?:Person[],aspectRatio?:AspectRatio,lazy?:boolean}} GalleryImage
 */

/**
 * @type {GalleryImage[]}
 */
const indexGalleryImages = [
    {
        imgUrl: "bafkreihir4esid7jflbudurembl5nylsa7ybotzvrykybazmysisg7dbii.jpg",
        title: "Just two bearcats enjoying a lil bug :3",
        people: [
            {
                name: "wewa",
                url: "https://www.instagram.com/therealwewa",
            },
            {
                name: "Kipper",
                url: "https://www.instagram.com/bluerhapsodyy",
            },
        ],
        aspectRatio: {
            x: 6,
            y: 4,
        },
        lazy: false,
    },
    {
        imgUrl: "example_72.png",
        title: "Thingy...",
        people: [
            {
                name: "Thingymabob",
                url: "https://bsky.app/profile/thingyproto.bsky.social",
            },
        ],
        lazy: false,
    },
    {
        imgUrl: "Untitled209_20210812015109.png",
        title: "Lilith",
        lazy: false,
    },
    {
        imgUrl: "Untitled516_20240616200137.png",
        title: "Drew my friend JulianDough in a fit i saw on Pinterest 🥰🥰",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        aspectRatio: {
            x: 4,
            y: 2,
        },
        lazy: false,
    },
    {
        imgUrl: "Untitled527_20240720003955.png",
        title: "Fan art",
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "bafkreifyegaaaipxjwm5nqxkr4unwruheuijbmwohyrkva5pem4zpdoaay.jpg",
        title: "She likes her new shark sweater",
        people: [
            {
                name: "Kipper",
                url: "https://www.instagram.com/bluerhapsodyy",
            },
        ],
        lazy: true,
    },
    {
        imgUrl: "Untitled570_Restored_20241101220703.png",
        title: "Commission",
        aspectRatio: {
            x: 4,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "Untitled608_20250130013231.png",
        title: "The 'fit",
        people: [
            {
                name: "Capri",
                url: "https://bsky.app/profile/nilllzz.dev",
            },
        ],
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "example_7.png",
        title: "Barraskewda",
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "bafkreiapdb3wx2qx7j2mjjkrikvs22zpuj3mwyvx3mekvsaiyhfnlqpxh4.jpg",
        title: "fan art of Moss :3 mossy dude fr",
        people: [
            {
                name: "Moss",
                url: "https://bsky.app/profile/mossisdead.bsky.social",
            },
        ],
        lazy: true,
    },
    {
        imgUrl: "Untitled634_20250220153628.png",
        title: "Will Ref Sheet",
        aspectRatio: {
            x: 3,
            y: 2,
        },
        lazy: true,
    },
    {
        imgUrl: "Untitled506_20240515230841.jpg",
        title: "She's ANGY",
        people: [
            {
                name: "Kipper",
                url: "https://www.instagram.com/bluerhapsodyy",
            },
        ],
        aspectRatio: {
            x: 3,
            y: 2,
        },
        lazy: true,
    },
    {
        imgUrl: "renderedFull2.jpg",
        title: "Butterfly 🤗",
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "Untitled567_20241017232630.png",
        title: "The Squad",
        people: [
            {
                name: "nilllzz",
                url: "https://bsky.app/profile/nilllzz.dev",
            },
            {
                name: "Kipper",
                url: "https://www.instagram.com/bluerhapsodyy",
            },
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        lazy: true,
    },
    {
        imgUrl: "bafkreifhuhhb3bpvswrpwvj42dl6pf4rx4lvigoolotwqhk7pxnnq3t6sq.jpg",
        title: "Male Kip ♂️",
        lazy: true,
    },
    {
        imgUrl: "example_3.png",
        title: "She's just chillin'",
        people: [
            {
                name: "Kipper",
                url: "https://www.instagram.com/bluerhapsodyy",
            },
        ],
        aspectRatio: {
            x: 4,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "caprieye.png",
        title: "Capri Eye Closeup",
        people: [
            {
                name: "Capri",
                url: "https://bsky.app/profile/nilllzz.dev",
            },
        ],
        aspectRatio: {
            x: 4,
            y: 2,
        },
        lazy: true,
    },
];

/**
 * @type {GalleryImage[]}
 */
const nsfwGalleryImages = [
    {
        imgUrl: "nsfw/bafkreicvouj6kpbkv3qgcthabpdxazyr66wrzwssx6jlmbocrten5pjkvm.jpg",
        title: "Wow! she gets a lot of views.",
        aspectRatio: {
            x: 6,
            y: 4,
        },
        lazy: false,
    },
    {
        imgUrl: "nsfw/bafkreiht3x5nf3idt3rhvrmiloazbqmyhkr36oxdql65tst3rtezpl5l6q.jpg",
        title: "she's showing off 🥰💜",
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: false,
    },
    {
        imgUrl: "nsfw/bafkreihxwtyhozhsv3im2e7brg44s3iqh47emtaglhur2wb4bnbhoju4v4.jpg",
        title: "quick lil sketch 🥰 was thinking of more ✨spice✨ ideas.",
        lazy: false,
    },
    {
        imgUrl: "nsfw/bafkreibtgjbaor2hxstok2ddf7gppjn6575tjscxjtpjf7orybfyvfb7ea.jpg",
        title: "Bad boys get punished~",
        lazy: false,
    },
    {
        imgUrl: "nsfw/bafkreihdec6vjiimzaikcyuvp3oamu7khpwgv2mcamvbevghazz4kvswjy.jpg",
        title: "probably the most tame NSFW/suggestive art I have of them 🤤🔥 my girlie 😏",
        lazy: true,
    },
    {
        imgUrl: "nsfw/bafkreiasxlfflazudkbwyvgoy73gpj6wsqlo623qh47m4vf5mevb57uanm.jpg",
        title: "Masculine kip NSFW version",
        lazy: true,
    },
    {
        imgUrl: "nsfw/bafkreibssbjxd3mwerefh5qwjvib5eoov2jutffijic7srxcswd4som7ou.jpg",
        title: "naughty naughty! She likes to please~",
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "nsfw/bafkreigglx5pxk4jgsizxlh7pgs6zzu2xi23rd4iumze2dapx3olpb5r3a.jpg",
        title: "Very erotic, don't judge me. She just likes being tied up and used~",
        aspectRatio: {
            x: 4,
            y: 6,
        },
        lazy: true,
    },
    {
        imgUrl: "nsfw/bafkreibso4p4xf7r2zypi564tdfqo3apmdpodd5eh7suydlw2o76hv5vxa.jpg",
        title: "a more recent NSFW piece I did for her. She's just so fun to draw 🥰",
        aspectRatio: {
            x: 4,
            y: 4,
        },
        lazy: true,
    },
];

/**
 * @param {string} imgUrl
 * @param {string} title
 * @param {boolean} ref
 * @param {{index:number;images:{imgUrl:string,title?:string}[]}|null} nav
 */
function spawnGalleryDialog(imgUrl, title, ref = false, nav = null) {
    const dialogEl = document.createElement("dialog");
    dialogEl.classList.add("galleryDialog");

    const imgEl = document.createElement("img");
    imgEl.src = imgUrl;
    dialogEl.appendChild(imgEl);

    const titleEl = document.createElement("div");
    if (title && title.length > 0) {
        titleEl.style.display = "block";
        titleEl.innerText = title;
    } else {
        titleEl.style.display = "none";
    }
    dialogEl.appendChild(titleEl);

    const closeEl = document.createElement("button");
    closeEl.classList.add("dialogButton", "closeButton");
    const closeIconEl = document.createElement("i");
    closeIconEl.classList.add("bi", "bi-x");
    closeEl.appendChild(closeIconEl);
    closeEl.addEventListener("click", () => {
        dialogEl.close();
        dialogEl.remove();
    });
    dialogEl.appendChild(closeEl);

    function loadNewImage(newImgUrl, newTitle) {
        if (newTitle) {
            titleEl.style.display = "block";
            titleEl.innerText = newTitle;
        } else {
            titleEl.innerText = "";
            titleEl.style.display = "none";
        }

        imgEl.src = newImgUrl;
    }

    if (nav) {
        let currentIndex = nav.index;

        const nextEl = document.createElement("button");
        nextEl.classList.add("dialogButton", "nextButton");
        const nextIconEl = document.createElement("i");
        nextIconEl.classList.add("bi", "bi-chevron-right");
        nextEl.appendChild(nextIconEl);
        nextEl.addEventListener("click", () => {
            const newIndex = (currentIndex + 1) % nav.images.length;
            const newImage = nav.images[newIndex];

            loadNewImage(newImage.imgUrl, newImage.title);

            currentIndex = newIndex;
        });
        dialogEl.appendChild(nextEl);

        const prevEl = document.createElement("button");
        prevEl.classList.add("dialogButton", "prevButton");
        const prevIconEl = document.createElement("i");
        prevIconEl.classList.add("bi", "bi-chevron-left");
        prevEl.appendChild(prevIconEl);
        prevEl.addEventListener("click", () => {
            const newIndex = (currentIndex - 1 + nav.images.length) % nav.images.length;
            const newImage = nav.images[newIndex];

            loadNewImage(newImage.imgUrl, newImage.title);

            currentIndex = newIndex;
        });
        dialogEl.appendChild(prevEl);
    }

    if (ref) {
        // Set query to image url.
        const url = new URL(window.location.href);
        url.searchParams.set("img", imgUrl);
        window.history.replaceState({}, "", url);

        dialogEl.addEventListener("close", () => {
            // Remove query from url.
            url.searchParams.delete("img");
            window.history.replaceState({}, "", url);
        });
    }

    document.body.appendChild(dialogEl);
    dialogEl.showModal();

    dialogEl.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            const nextEl = dialogEl.querySelector(".nextButton");
            if (nextEl) {
                nextEl.click();
            }
        } else if (e.key === "ArrowLeft") {
            const prevEl = dialogEl.querySelector(".prevButton");
            if (prevEl) {
                prevEl.click();
            }
        }
    });
}

// On startup, check if there is a query for an image and spawn the dialog.
const url = new URL(window.location.href);
const imgParam = url.searchParams.get("img");
if (imgParam) {
    const img = imgParam;
    // Try and find the image by path from the gallery items.
    const galleryImages = indexGalleryImages.concat(nsfwGalleryImages);
    const galleryImage = galleryImages.find((x) => `img/gallery/${x.imgUrl}` === img);
    const title = galleryImage ? galleryImage.title : "";

    spawnGalleryDialog(img, title, true);
}

/**
 * @param {GalleryImage[]} galleryImages
 * @param {boolean} lazy
 */
function loadGallery(galleryImages, lazy, pathPrefix = "") {
    const galleryTemplateEl = document.getElementById("galleryImageTemplate");

    function createDialogNav(ii) {
        let index = ii;
        if (lazy) {
            index += galleryImages.filter((x) => !x.lazy).length;
        }
        return {
            index,
            images: galleryImages.map((x) => ({
                title: x.title,
                imgUrl: `${pathPrefix}img/gallery/${x.imgUrl}`,
            })),
        };
    }

    let i = 0;
    for (const galleryImage of galleryImages.filter((x) => x.lazy == lazy)) {
        /** @type {HTMLDivElement} */
        const clone = galleryTemplateEl.content.cloneNode(true);

        /** @type {HTMLAnchorElement} */
        const imageEl = clone.querySelector(".galleryImage");
        imageEl.style.backgroundImage = `url(${pathPrefix}img/gallery/${galleryImage.imgUrl})`;
        imageEl.addEventListener("click", () =>
            spawnGalleryDialog(
                `${pathPrefix}img/gallery/${galleryImage.imgUrl}`,
                galleryImage.title,
                true,
                createDialogNav(i)
            )
        );

        if (lazy) {
            imageEl.style.animationName = "gallery-lazy-load-in";
            imageEl.style.animationDelay = `${i * 0.05}s`;
        }

        if (galleryImage.aspectRatio) {
            const container = clone.querySelector(".galleryImageContainer");
            container.style.gridColumn = `span ${galleryImage.aspectRatio.x}`;
            container.style.gridRow = `span ${galleryImage.aspectRatio.y}`;
        }

        const titleEl = clone.querySelector("[data-id='title']");
        titleEl.innerText = galleryImage.title;

        const peopleEl = clone.querySelector("[data-id='people']");
        if (galleryImage.people && galleryImage.people.length > 0) {
            const iconEl = document.createElement("i");
            iconEl.classList.add("bi", "bi-person-fill");
            iconEl.title = "People in this image";
            peopleEl.appendChild(iconEl);

            for (const person of galleryImage.people) {
                const aEl = document.createElement("a");
                aEl.innerText = person.name;
                aEl.href = person.url;
                aEl.target = "_blank";
                aEl.rel = "noopener noreferrer";
                aEl.style.color = "var(--color-kip-white)";
                peopleEl.appendChild(aEl);
            }
        } else {
            peopleEl.remove();
        }

        document.getElementById("galleryContainer").appendChild(clone);

        i++;
    }

    const masonryParent = document.getElementById("galleryMasonry");
    if (masonryParent && !masonryParent.hasChildNodes()) {
        const sizer = document.createElement("div");
        sizer.classList.add("masonrySizer");
        masonryParent.appendChild(sizer);

        i = 0;
        for (const galleryImage of galleryImages) {
            const masonryItem = document.createElement("a");
            masonryItem.classList.add("masonryItem");
            masonryItem.addEventListener("click", () =>
                spawnGalleryDialog(
                    `${pathPrefix}img/gallery/${galleryImage.imgUrl}`,
                    galleryImage.title,
                    true,
                    createDialogNav(i)
                )
            );
            masonryItem.target = "_blank";
            /** @type {HTMLImageElement} */
            const masonryImg = document.createElement("img");
            masonryImg.src = `${pathPrefix}img/gallery/${galleryImage.imgUrl}`;
            masonryItem.appendChild(masonryImg);
            masonryParent.appendChild(masonryItem);

            i++;
        }

        imagesLoaded(masonryParent, async function () {
            masonryParent.classList.remove("loading");
            const loadingEl = document.getElementById("galleryMasonryLoading");
            if (loadingEl) {
                loadingEl.remove();
            }

            new Masonry(masonryParent, {
                itemSelector: ".masonryItem",
                columnWidth: ".masonrySizer",
                percentPosition: true,
                gutter: 2,
                horizontalOrder: true,
            });
        });
    }
}

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
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        lazy: false,
    },
    {
        imgUrl: "Untitled209_20210812015109.png",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        lazy: false,
    },
    {
        imgUrl: "Untitled516_20240616200137.png",
        title: "Cool guy",
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
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "bafkreifyegaaaipxjwm5nqxkr4unwruheuijbmwohyrkva5pem4zpdoaay.jpg",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        lazy: true,
    },
    {
        imgUrl: "Untitled570_Restored_20241101220703.png",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        aspectRatio: {
            x: 4,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "Untitled608_20250130013231.png",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
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
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "bafkreiapdb3wx2qx7j2mjjkrikvs22zpuj3mwyvx3mekvsaiyhfnlqpxh4.jpg",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        lazy: true,
    },
    {
        imgUrl: "Untitled634_20250220153628.png",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        aspectRatio: {
            x: 3,
            y: 2,
        },
        lazy: true,
    },
    {
        imgUrl: "Untitled506_20240515230841.jpg",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
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
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        aspectRatio: {
            x: 2,
            y: 4,
        },
        lazy: true,
    },
    {
        imgUrl: "Untitled567_20241017232630.png",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        lazy: true,
    },
    {
        imgUrl: "bafkreifhuhhb3bpvswrpwvj42dl6pf4rx4lvigoolotwqhk7pxnnq3t6sq.jpg",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
            },
        ],
        lazy: true,
    },
    {
        imgUrl: "example_3.png",
        title: "Cool guy",
        people: [
            {
                name: "Julian",
                url: "https://juliandoes.art",
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
        title: "Cool guy",
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
        lazy: true,
    },
];

// {
//     imgUrl: "bafkreifyegaaaipxjwm5nqxkr4unwruheuijbmwohyrkva5pem4zpdoaay.jpg",
//     title: "She likes her new shark sweater",
//     lazy: false,
// },
// {
//     imgUrl: "bafkreihgrhwjc7doem4w7beocbwhdqdjlinwuvcr2bhrgf7exioulu5v4i.jpg",
//     title: "Drew my friend JulianDough in a fit i saw on Pinterest 🥰🥰",
//     people: [
//         {
//             name: "Julian",
//             url: "https://juliandoes.art",
//         },
//     ],
//     lazy: false,
// },
// {
//     imgUrl: "bafkreifwrabag55fbqarsybpkhsdvcifly6fbwdvq5kbe2f4evuadyyoaq.jpg",
//     title: "YCH on a hill at dusk",
//     aspectRatio: {
//         x: 4,
//         y: 2,
//     },
//     lazy: false,
// },
// {
//     imgUrl: "bafkreiapdb3wx2qx7j2mjjkrikvs22zpuj3mwyvx3mekvsaiyhfnlqpxh4.jpg",
//     title: "fan art of Moss :3 mossy dude fr",
//     people: [
//         {
//             name: "Moss",
//             url: "https://bsky.app/profile/mossisdead.bsky.social",
//         },
//     ],
//     lazy: true,
// },
// {
//     imgUrl: "bafkreihtdpeeqj7fq5se7nswr2wsrevvlc34iznqtamjisbk6i2re6ao4i.jpg",
//     title: "A caniform drawing reference I made",
//     lazy: true,
// },
// {
//     imgUrl: "Untitled634_20250220153628.png",
//     title: "Will ref sheet",
//     aspectRatio: {
//         x: 4,
//         y: 4,
//     },
//     lazy: true,
// },
// {
//     imgUrl: "Untitled209_20210812015109.png",
//     title: "Lilith",
//     lazy: true,
// },
// {
//     imgUrl: "caprieye.png",
//     title: "Capri Eye",
//     people: [
//         {
//             name: "nilllzz",
//             url: "https://bsky.app/profile/nilllzz.dev",
//         },
//     ],
//     aspectRatio: {
//         x: 4,
//         y: 2,
//     },
//     lazy: true,
// },

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
 * @param {GalleryImage[]} galleryImages
 * @param {boolean} lazy
 */
function loadGallery(galleryImages, lazy, pathPrefix = "") {
    const galleryTemplateEl = document.getElementById("galleryImageTemplate");

    let i = 0;
    for (const galleryImage of galleryImages.filter((x) => x.lazy == lazy)) {
        /** @type {HTMLDivElement} */
        const clone = galleryTemplateEl.content.cloneNode(true);

        /** @type {HTMLAnchorElement} */
        const imageEl = clone.querySelector(".galleryImage");
        imageEl.style.backgroundImage = `url(${pathPrefix}img/gallery/${galleryImage.imgUrl})`;
        imageEl.href = `${pathPrefix}img/gallery/${galleryImage.imgUrl}`;

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

        for (const galleryImage of galleryImages) {
            const masonryItem = document.createElement("a");
            masonryItem.classList.add("masonryItem");
            masonryItem.href = `${pathPrefix}img/gallery/${galleryImage.imgUrl}`;
            masonryItem.target = "_blank";
            /** @type {HTMLImageElement} */
            const masonryImg = document.createElement("img");
            masonryImg.src = `${pathPrefix}img/gallery/${galleryImage.imgUrl}`;
            masonryImg.loading = "lazy";
            masonryItem.appendChild(masonryImg);
            masonryParent.appendChild(masonryItem);
        }

        imagesLoaded(masonryParent, function () {
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

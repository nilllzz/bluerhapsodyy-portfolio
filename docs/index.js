const heroImageEl = document.getElementById("heroImage");
const mainNavEl = document.getElementById("mainNav");
setHeroImageFilter(0);

document.addEventListener("scroll", (e) => {
    // Update parallax effect on hero image
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    const scrollPercentage = Math.min(scrollPosition / clientHeight, 1);

    setHeroImageFilter(scrollPercentage);
});

function setHeroImageFilter(scrollPercentage) {
    const clientHeight = document.documentElement.clientHeight;

    heroImageEl.style.transform = `translateY(${scrollPercentage * (clientHeight / 3)}px)`;

    const blurStrength = scrollPercentage * 15;
    const brightnessStrength = 0.8 - scrollPercentage * 0.4;
    const saturateStrength = 0.8 - scrollPercentage * 0.8;

    heroImageEl.style.filter = `brightness(${brightnessStrength}) saturate(${saturateStrength}) blur(${blurStrength}px)`;

    const grayscaleStrength = scrollPercentage * 0.75;
    mainNavEl.style.backdropFilter = `blur(${blurStrength}px) grayscale(${grayscaleStrength})`;
    mainNavEl.style.backgroundColor = `rgba(0, 0, 0, ${scrollPercentage * 0.3})`;
}

// ------------------------------------------------------------------------------------------------
// #region Set copyright year to current year
const copyrightYearEl = document.getElementById("copyrightYear");
copyrightYearEl.innerText = new Date().getFullYear().toString();
// #endregion
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// #region Set up active header
const headerElements = [
    ...document.getElementsByTagName("h1"),
    ...document.getElementsByTagName("h2"),
].filter((x) => !!x.id);

const navListEl = document.getElementById("navList");
document.addEventListener("scroll", (e) => {
    let toppestHeader = null;
    for (const headerEl of headerElements) {
        const headerPos = headerEl.getBoundingClientRect().top;
        // Some margin above the top of the header element.
        // That way the section is active once a little of it is scrolled into view.
        // Must at least be scroll-margin-top of the header element.
        if (headerPos <= 140) {
            toppestHeader = headerEl;
        }
    }

    toppestHeader ||= headerElements[0];
    const currentHeaderRef = toppestHeader.id;
    for (const navEl of navListEl.getElementsByTagName("li")) {
        const ref = navEl.getAttribute("data-ref");
        if (ref === currentHeaderRef) {
            if (!navEl.classList.contains("active")) {
                navEl.classList.add("active");
            }
        } else {
            if (navEl.classList.contains("active")) {
                navEl.classList.remove("active");
                navEl.onanimationiteration;
            }
        }
    }
});
// #endregion
// ------------------------------------------------------------------------------------------------

loadGallery(indexGalleryImages, false);

function onClickExpandGallery() {
    const galleryParentEl = document.getElementById("galleryParent");
    galleryParentEl.classList.toggle("closed");
    loadGallery(indexGalleryImages, true);
}

/**
 * @typedef {{name?:string,nameSmall?:string,amount:string}} CommissionTypePricing
 * @typedef {{id:string,title:string,imgUrl:string,pricing:CommissionTypePricing[],details?:string[],examples?:GalleryImage[]}} CommissionType
 */

/**
 * @type {CommissionType[]}
 */
const commissionTypes = [
    {
        id: "stickers",
        title: "Stickers",
        imgUrl: "stickers/index.gif",
        examples: [
            {
                imgUrl: "stickers/example_0.png",
                title: "Kipper Notes",
            },
            {
                imgUrl: "stickers/example_1.png",
                title: "Capri RAAAHH",
            },
            {
                imgUrl: "stickers/example_2.png",
                title: "Kylo Wailing",
            },
            {
                imgUrl: "stickers/example_3.gif",
                title: "Capri Nodding",
            },
            {
                imgUrl: "stickers/example_4.png",
                title: "Kylo Scheming",
            },
            {
                imgUrl: "stickers/example_5.png",
                title: "Kipper Hug",
            },
            {
                imgUrl: "stickers/example_6.png",
                title: "Gotten",
            },
            {
                imgUrl: "stickers/example_7.png",
                title: "Acquired",
            },
        ],
        pricing: [
            {
                name: "Simple",
                amount: "$25&nbsp;&nbsp;",
            },
            {
                name: "Animated",
                amount: "$35+",
            },
        ],
        details: [
            "'Simple' stickers are a single character without a background.",
            "+$5 for stickers I haven't done before.",
            "",
            "'Animated' stickers are at least two frames, $15 for each additional (unique) frame.",
        ],
    },
    {
        id: "ref-sheet",
        title: "Ref Sheet",
        imgUrl: "refs/index.png",
        examples: [
            {
                imgUrl: "refs/example_3.png",
                title: "Will",
            },
            {
                imgUrl: "refs/example_0.jpg",
                title: "Forest",
            },
            {
                imgUrl: "refs/example_1.jpg",
                title: "Kipper",
            },
            {
                imgUrl: "refs/example_2.png",
                title: "Capri",
            },
        ],
        pricing: [
            {
                name: "Simple",
                amount: "$100&nbsp;&nbsp;",
            },
            {
                name: "Complex",
                amount: "$150+",
            },
        ],
        details: [
            "Simple Ref sheets include a front and back view and paw/hand detail.",
            "Complex Ref sheets come with everything a Simple Ref sheet has, plus a closeup of eye, paws, full body pose (with or without clothes), favorite drink and food, skull, and more.",
        ],
    },
    {
        id: "base-color",
        title: "Base Color",
        imgUrl: "color/index.png",
        examples: [
            {
                imgUrl: "color/example_9.png",
                title: "",
            },
            {
                imgUrl: "color/example_0.png",
                title: "",
            },
            {
                imgUrl: "color/example_7.png",
                title: "",
            },
            {
                imgUrl: "color/example_1.png",
                title: "",
            },
            {
                imgUrl: "color/example_2.png",
                title: "",
            },
            {
                imgUrl: "color/example_3.png",
                title: "",
            },
            {
                imgUrl: "color/example_4.png",
                title: "",
            },
            {
                imgUrl: "color/example_5.png",
                title: "",
            },
            {
                imgUrl: "color/example_6.png",
                title: "",
            },
            {
                imgUrl: "color/example_8.png",
                title: "",
            },
            {
                imgUrl: "color/example_10.png",
                title: "",
            },
            {
                imgUrl: "color/example_11.png",
                title: "",
            },
        ],
        pricing: [
            {
                name: "Headshot",
                amount: "$30",
            },
            {
                name: "Bust",
                amount: "$40",
            },
            {
                name: "Thigh up",
                amount: "$50",
            },
            {
                name: "Fullbody",
                amount: "$80",
            },
        ],
        details: [
            "Simple background free (outlines, color gradient, etc).",
            "Complex background +$30.",
        ],
    },
    {
        id: "render",
        title: "Rendered",
        imgUrl: "rendered/index.png",
        examples: [
            {
                imgUrl: "rendered/example_0.png",
                title: "",
            },
            {
                imgUrl: "rendered/example_3.png",
                title: "",
            },
            {
                imgUrl: "rendered/example_4.jpg",
                title: "",
            },
            {
                imgUrl: "rendered/example_1.png",
                title: "",
            },
            {
                imgUrl: "rendered/example_2.png",
                title: "",
            },
            {
                imgUrl: "rendered/example_5.png",
                title: "",
            },
            {
                imgUrl: "rendered/example_6.png",
                title: "",
            },
            {
                imgUrl: "rendered/example_7.png",
                title: "",
            },
            {
                imgUrl: "rendered/example_8.png",
                title: "",
            },
        ],
        pricing: [
            {
                name: "Headshot",
                amount: "$40",
            },
            {
                name: "Bust",
                amount: "$50",
            },
            {
                name: "Thigh up",
                amount: "$60",
            },
            {
                name: "Fullbody",
                amount: "$100",
            },
        ],
        details: [
            "Simple background free (outlines, color gradient, etc).",
            "Complex background +$30.",
        ],
    },
    {
        id: "meme",
        title: "Meme",
        imgUrl: "meme/index.png",
        examples: [
            {
                imgUrl: "meme/example_0.jpg",
                title: "",
            },
            {
                imgUrl: "meme/example_1.png",
                title: "",
            },
            {
                imgUrl: "meme/example_2.png",
                title: "",
            },
            {
                imgUrl: "meme/example_3.png",
                title: "",
            },
        ],
        pricing: [
            {
                nameSmall: "Redraw over base",
                amount: "$20",
            },
        ],
        details: [
            "A 'Meme' commission is a draw-over of an existing meme or template with your character(s).",
            "The price is for a single character, additional characters are $5 each.",
        ],
    },
    {
        id: "eye-render",
        title: "Eye Render",
        imgUrl: "eye/index.png",
        examples: [
            {
                imgUrl: "eye/example_0.png",
                title: "Kipper Eye",
            },
            {
                imgUrl: "eye/example_1.png",
                title: "Capri Eye",
            },
        ],
        pricing: [
            {
                nameSmall: "experimental",
                amount: "$30",
            },
        ],
    },
];

function loadCommissionTypes() {
    const parentEl = document.getElementById("commissionSlates");
    const templateEl = document.getElementById("commissionSlateTemplate");

    for (const commissionType of commissionTypes) {
        const clone = templateEl.content.cloneNode(true);

        const imgEl = clone.querySelector("[data-id='image']");
        imgEl.src = `img/commissions/${commissionType.imgUrl}`;

        const titleEl = clone.querySelector("[data-id='title']");
        titleEl.innerText = commissionType.title;

        const pricingParentEl = clone.querySelector("[data-id='pricing']");
        for (const pricing of commissionType.pricing) {
            const pricingEl = document.createElement("div");
            const pricingNameEl = document.createElement("span");
            pricingNameEl.className = "priceName";
            if (pricing.name) {
                const pricingNameText = document.createTextNode(pricing.name);
                pricingNameEl.appendChild(pricingNameText);
            }
            if (pricing.nameSmall) {
                if (pricing.name) {
                    const pricingNameSmallSeparator = document.createElement("br");
                    pricingNameEl.appendChild(pricingNameSmallSeparator);
                }

                const pricingNameSmallEl = document.createElement("small");
                pricingNameSmallEl.innerText = pricing.nameSmall;
                pricingNameEl.appendChild(pricingNameSmallEl);
            }
            pricingEl.appendChild(pricingNameEl);
            const pricingAmountEl = document.createElement("span");
            pricingAmountEl.className = "priceAmount";
            pricingAmountEl.innerHTML = pricing.amount;
            pricingEl.appendChild(pricingAmountEl);
            pricingParentEl.appendChild(pricingEl);
        }

        clone.querySelector(".commissionSlate").setAttribute("data-id", commissionType.id);

        parentEl.appendChild(clone);
    }
}
loadCommissionTypes();

/**
 * @param {HTMLDivElement} slateEl
 */
function onClickCommissionSlate(slateEl) {
    const dialogEl = document.getElementById("commissionDetailsDialog");
    if (dialogEl.open) {
        return;
    }

    const commissionId = slateEl.getAttribute("data-id");
    const commissionType = commissionTypes.find((x) => x.id === commissionId);
    if (!commissionType) {
        return;
    }

    // Copy commission slate into the dialog.
    const slateTargetEl = document.getElementById("commissionDetailsDialogSlateTarget");
    slateTargetEl.innerHTML = "";

    const slateClone = slateEl.cloneNode(true);
    slateClone.classList.add("active");
    slateTargetEl.appendChild(slateClone);

    // Fill details text with commission details.
    const detailsEl = document.getElementById("commissionDetailModalDetails");
    detailsEl.innerHTML = "";
    if (commissionType.details) {
        for (const detailLine of commissionType.details) {
            const detailLineEl = document.createElement("p");
            detailLineEl.innerText = detailLine;
            detailsEl.appendChild(detailLineEl);
        }
    }

    // Load example iamges.
    const examplesEl = document.getElementById("commissionDetailModalExamples");
    const exampleImagesEl = document.getElementById("commissionDetailModalExampleImages");
    exampleImagesEl.innerHTML = "";
    if (commissionType.examples && commissionType.examples.length > 0) {
        examplesEl.style.display = "block";

        /** @type {HTMLTemplateElement} */
        const exampleImageTemplate = document.getElementById(
            "commissionDetailModalExampleImageTemplate"
        );

        for (const example of commissionType.examples) {
            const exampleImageEl = exampleImageTemplate.content.cloneNode(true);

            // Set image src and href.
            /** @type {HTMLAnchorElement} */
            const exampleImageAEl = exampleImageEl.querySelector("a");
            exampleImageAEl.href = `img/commissions/${example.imgUrl}`;
            exampleImageAEl.style.backgroundImage = `url(img/commissions/${example.imgUrl})`;

            // Set
            /** @type {HTMLDivElement} */
            const exampleImageTitleEl = exampleImageEl.querySelector('[data-id="title"]');
            if (example.title) {
                exampleImageTitleEl.innerText = example.title;
            } else {
                exampleImageTitleEl.parentElement.remove();
            }

            exampleImagesEl.appendChild(exampleImageEl);
        }
    } else {
        // Hide if no example images.
        examplesEl.style.display = "none";
    }

    dialogEl.showModal();

    // Set query to current commission id.
    const url = new URL(window.location.href);
    url.searchParams.set("commission", commissionId);
    // Set url anchor to "commissions".
    url.hash = "commissions";
    window.history.replaceState({}, "", url);

    const titleEl = document.querySelector("[data-details-dialog-title='1']");
    titleEl.innerText = slateEl.querySelector("[data-id='title']").innerText;
}

function closeCommissionDetailsDialog() {
    const dialogEl = document.getElementById("commissionDetailsDialog");
    dialogEl.close();
}

function onCommissionDetailsDialogClose() {
    // Remove the "commission" query param from the URL.
    const url = new URL(window.location.href);
    if (url.searchParams.has("commission")) {
        url.searchParams.delete("commission");
        window.history.replaceState({}, "", url);
    }
}

function openCommissionDetailsDialogFromQuery() {
    const url = new URL(window.location.href);
    const commissionId = url.searchParams.get("commission");
    if (!commissionId) {
        return;
    }

    const slateEl = document.querySelector(`.commissionSlate[data-id="${commissionId}"]`);
    if (!slateEl) {
        return;
    }

    document.getElementById("commissions").scrollIntoView();
    onClickCommissionSlate(slateEl);
}
openCommissionDetailsDialogFromQuery();

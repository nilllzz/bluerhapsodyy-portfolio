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

function loadCommissionTypes() {
    const templateEl = document.getElementById("commissionTypeTemplate");
    const commissionTypesEl = document.getElementById("commissionTypes");

    let i = 0;

    for (const commissionType of commissionTypes) {
        const clone = templateEl.content.cloneNode(true);

        const imgEl = clone.querySelector("img");
        imgEl.src = `img/commissions/${commissionType.imgUrl}`;

        const aEl = imgEl.parentElement;
        aEl.href = `commission/?type=${commissionType.id}`;

        const titleEl = clone.querySelector(".commissionTitle");
        titleEl.innerText = commissionType.title;

        const moneyEl = clone.querySelector(".commissionMoney");
        moneyEl.innerText = commissionType.money;

        if (commissionType.doCostInfo) {
            const costInfoEl = clone.querySelector(".commissionCostInfo");
            costInfoEl.innerText = "*";
        }

        const smallEl = clone.querySelector(".commissionSmall");
        if (commissionType.small) {
            smallEl.innerText = commissionType.small;
        } else {
            smallEl.remove();
        }

        if (Math.floor(i / 2) % 2 === 1) {
            clone
                .querySelector(".commissionContainer")
                .classList.add("commissionContainerInverted");
        }

        const container = clone.querySelector(".commissionContainer");
        container.setAttribute("data-index", i.toString());
        container.setAttribute("data-type", commissionType.id);

        commissionTypesEl.appendChild(clone);
        i++;
    }
}
// loadCommissionTypes();

loadGallery(indexGalleryImages, false);

function onClickExpandGallery() {
    const galleryParentEl = document.getElementById("galleryParent");
    galleryParentEl.classList.toggle("closed");
    loadGallery(indexGalleryImages, true);
}

/**
 * @typedef {{name?:string,nameSmall?:string,amount:string}} CommissionTypePricing
 * @typedef {{id:string,title:string,imgUrl:string,pricing:CommissionTypePricing[],details?:string[]}} CommissionType2
 */

/**
 * @type {CommissionType2[]}
 */
const commissionTypes2 = [
    {
        id: "stickers",
        title: "Stickers",
        imgUrl: "stickers.gif",
        pricing: [
            {
                name: "Simple",
                amount: "$20&nbsp;&nbsp;",
            },
            {
                name: "Animated",
                amount: "$30+",
            },
        ],
        details: [
            "'Simple' stickers are a single character without a background",
            "'Animated' stickers are at least two frames, the more frames the higher the price",
        ],
    },
    {
        id: "ref-sheet",
        title: "Ref Sheet",
        imgUrl: "refs.png",
        pricing: [
            {
                nameSmall: "depends on detail",
                amount: "$80",
            },
        ],
    },
    {
        id: "rendered-bust",
        title: "Rendered Bust",
        imgUrl: "refs.png",
        pricing: [
            {
                amount: "$40",
            },
            {
                nameSmall: "w/ Background",
                amount: "$60",
            },
        ],
    },
    {
        id: "rendered-full",
        title: "Rendered Full",
        imgUrl: "refs.png",
        pricing: [
            {
                amount: "$50",
            },
            {
                nameSmall: "w/ Background",
                amount: "$80",
            },
        ],
    },
    {
        id: "meme",
        title: "Meme",
        imgUrl: "meme2.png",
        pricing: [
            {
                nameSmall: "Redraw over base",
                amount: "$15",
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
        imgUrl: "eye2.png",
        pricing: [
            {
                nameSmall: "experimental",
                amount: "$30",
            },
        ],
    },
];

function loadCommissionTypes2() {
    const parentEl = document.getElementById("commissionSlates");
    const templateEl = document.getElementById("commissionSlateTemplate");

    for (const commissionType of commissionTypes2) {
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
loadCommissionTypes2();

/**
 * @param {HTMLDivElement} slateEl
 */
function onClickCommissionSlate(slateEl) {
    const dialogEl = document.getElementById("commissionDetailsDialog");
    if (dialogEl.open) {
        return;
    }

    const commissionId = slateEl.getAttribute("data-id");
    const commissionType = commissionTypes2.find((x) => x.id === commissionId);
    if (!commissionType) {
        return;
    }

    const slateTargetEl = document.getElementById("commissionDetailsDialogSlateTarget");
    slateTargetEl.innerHTML = "";

    const slateClone = slateEl.cloneNode(true);
    slateClone.classList.add("active");
    slateTargetEl.appendChild(slateClone);

    const detailsEl = document.getElementById("commissionDetailModalDetails");
    detailsEl.innerHTML = "";
    if (commissionType.details) {
        for (const detailLine of commissionType.details) {
            const detailLineEl = document.createElement("p");
            detailLineEl.innerText = detailLine;
            detailsEl.appendChild(detailLineEl);
        }
        detailsEl.appendChild(document.createElement("hr"));
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

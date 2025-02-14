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

loadGallery(nsfwGalleryImages, false, "../");

function onClickExpandGallery() {
    const galleryParentEl = document.getElementById("galleryParent");
    galleryParentEl.classList.toggle("closed");
    loadGallery(nsfwGalleryImages, true, "../");
}

const ageGateLocalStorageKey = "bluerhapsodyy-age-gate-dismissed";

/**
 * @type {HTMLDialogElement}
 */
const ageGateDialogEl = document.getElementById("ageGateDialog");
const mainEl = document.getElementsByTagName("main")[0];

function onClickDismissAgeGate() {
    localStorage.setItem(ageGateLocalStorageKey, "1");
    closeAgeGate();
}

function closeAgeGate() {
    ageGateDialogEl.close();
    mainEl.classList.remove("blurred");
}

function showAgeGate() {
    const hasDismissedAgeGate = localStorage.getItem(ageGateLocalStorageKey);
    if (hasDismissedAgeGate) {
        closeAgeGate();
        return;
    }

    ageGateDialogEl.showModal();
    mainEl.classList.add("blurred");
}

showAgeGate();

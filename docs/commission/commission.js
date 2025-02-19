function loadCommissionTypeData() {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);

    const commissionTypeId = (urlParams.get("type") || "").toLowerCase().trim();
    const commissionTypeData = commissionTypes.find((x) => x.id === commissionTypeId);

    console.log({ commissionTypeData });

    if (!commissionTypeData) {
        // Redirect to index if no commission type set, or an invalid one is set.
        console.warn("No commission type found for input id.", { commissionTypeId });
        const newUrl = new URL("../#commissions", window.location.href);
        window.location.href = newUrl.href;
        return;
    }

    const titleEL = document.getElementById("title");
    titleEL.innerText = commissionTypeData.title;

    const mainImg = document.getElementById("mainImg");
    mainImg.src = `../img/commissions/${commissionTypeData.imgUrl}`;

    const moneyEl = document.getElementById("money");
    moneyEl.innerText = commissionTypeData.money;

    const smallEl = document.getElementById("small");
    if (commissionTypeData.small) {
        smallEl.innerText = commissionTypeData.small;
    } else {
        smallEl.remove();
    }

    const additionalDetailsContainerEl = document.getElementById("additionalDetails");
    const details = commissionTypeData.details || [];

    if (details.length > 0) {
        const hr = document.createElement("hr");
        additionalDetailsContainerEl.appendChild(hr);

        for (const detail of details) {
            const detailEl = document.createElement("p");
            detailEl.innerText = detail;
            additionalDetailsContainerEl.appendChild(detailEl);
        }
    }
}

loadCommissionTypeData();

function trackEventClickSocialLink(source, platform, sourceValue = null) {
    gtag("event", "click_social_link", {
        event_category: "link",
        event_label: "click_social_link",
        event_action: "click",

        source,
        platform,
        source_value: sourceValue,
    });
    return true;
}

function trackEventOpenCommissionType(type) {
    gtag("event", "open_commission_type", {
        event_category: "engagement",
        event_label: "open_commission_type",
        event_action: "click",

        commission_type: type,
    });
    return true;
}

function trackEventOpenGalleryImage(type, value, image) {
    gtag("event", "open_gallery_image", {
        event_category: "engagement",
        event_label: "open_gallery_image",
        event_action: "click",

        gallery_type: type,
        gallery_value: value,
        gallery_image: image,
    });
    return true;
}

function trackEventGalleryInteract(interaction) {
    gtag("event", "gallery_interact", {
        event_category: "engagement",
        event_label: "gallery_interact",
        event_action: "click",

        interaction,
    });
    return true;
}

function trackEventNavigate(source, to) {
    gtag("event", "navigate", {
        event_category: "engagement",
        event_label: "navigate",
        event_action: "click",

        source,
        to,
    });
    return true;
}

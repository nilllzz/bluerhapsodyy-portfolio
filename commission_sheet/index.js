function applyLetterTransformH1() {
    const h1 = document.querySelector("h1");

    // Split text within h1 into spans for each character:
    const text = h1.innerText;
    const letters = text.split("");
    const spans = letters.map((letter) => {
        const newSpan = document.createElement("span");
        if (letter === " ") {
            letter = "\u00A0"; // Non-breaking space
        }
        newSpan.innerText = letter;

        return newSpan;
    });

    // Shift letters left/right of the center to the bottom based on how far away they are from the center:
    const center = Math.floor(letters.length / 2);
    spans.forEach((span, index) => {
        const distanceFromCenter = index - center;
        const absDistanceFromCenter = Math.abs(distanceFromCenter);

        span.style.display = "inline-block";

        const shift = absDistanceFromCenter * 0.75;
        span.style.transform = `translateY(${shift}px)`;

        const rotate = distanceFromCenter * 0.75;
        span.style.transform += ` rotate(${rotate}deg)`;
    });

    // Replace h1 text with spans:
    h1.innerText = "";
    spans.forEach((span) => h1.appendChild(span));
}
applyLetterTransformH1();

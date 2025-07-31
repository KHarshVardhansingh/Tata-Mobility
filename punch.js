function showVariantDetails() {
    const variant = document.getElementById("variantSelect").value;
    const details = document.getElementById("variantDetails");

    let text = "";
    switch (variant) {
        case "pure":
            text = "Pure Variant: Basic features, manual AC, dual airbags.";
            break;
        case "adventure":
            text = "Adventure Variant: Touchscreen infotainment, steering mounted controls.";
            break;
        case "accomplished":
            text = "Accomplished Variant: Cruise control, alloy wheels, rear camera.";
            break;
        case "creative":
            text = "Creative Variant: Premium features, iRA technology, sunroof.";
            break;
        default:
            text = "";
    }

    details.innerHTML = `<p>${text}</p>`;
}

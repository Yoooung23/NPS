import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a href="${info.url}" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

document.title = parkData.fullName;

const heroImage = document.querySelector(".hero-banner img");
if (heroImage && parkData.images && parkData.images.length > 0) {
    heroImage.src = parkData.images[0].url;
    heroImage.alt = parkData.images[0].altText || parkData.fullName;
}

const heroContent = document.querySelector(".hero-banner__content");
if (heroContent) {
    const statesTrimmed = parkData.states ? parkData.states.replace(/,\s*$/, "") : "";
    heroContent.innerHTML = parkInfoTemplate({
        url: parkData.url,
        name: parkData.name,
        designation: parkData.designation,
        states: statesTrimmed
    });
}

console.log("complete");

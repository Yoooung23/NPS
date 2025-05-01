import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
    return ` <a href="/" class="hero-banner__title">${info.name}<a/>
    <p class="hero-banner"__subtitle">
        `
}
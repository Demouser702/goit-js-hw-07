import { galleryItems } from "./gallery-items.js";
import "./simple-lightbox.js";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
galleryItems.forEach((image) => {
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery__item");
  const galleryLinkEl = document.createElement("a");
  galleryLinkEl.classList.add("gallery__link");
  galleryLinkEl.href = image.original;
  const galleryImageEl = document.createElement("img");
  galleryImageEl.classList.add("gallery__image");
  galleryImageEl.src = image.preview;
  galleryImageEl.alt = image.description;
  galleryImageEl.dataset.source = image.original;
  galleryLinkEl.appendChild(galleryImageEl);
  galleryItemEl.appendChild(galleryLinkEl);
  galleryEl.appendChild(galleryItemEl);
});

galleryEl.addEventListener("click", openImageInLightbox);
function openImageInLightbox(event) {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const lightbox = new SimpleLightbox(".gallery__link", {
      captions: true,
      captionDelay: 250,
      captionPosition: "bottom",
      captionType: "custom",
      captionsData: "alt",
    });
    lightbox.open();
  }
}

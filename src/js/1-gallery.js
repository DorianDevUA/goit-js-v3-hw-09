import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import images from './images.js';

const gallery = document.querySelector('.gallery');

renderGallery(gallery, images);

function createGalleryElementsMarkup(elements) {
  return elements
    .map(
      ({ preview, original, description }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${original}">
            <img
              class="gallery-image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}

function renderGallery(element, images) {
  const galeryElementsMarkup = createGalleryElementsMarkup(images);
  element.innerHTML = galeryElementsMarkup;
}

const options = {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
  scrollZoom: false,
  disableScroll: true,
  loop: false,
  disableRightClick: true,
};

// Ініціалізація бібліотеки SimpleLightbox
new SimpleLightbox('.gallery-link', options);

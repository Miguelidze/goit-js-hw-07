import {
    galleryItems
} from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryPic = galleryItems.map((galleryItem) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`).join("");

gallery.insertAdjacentHTML("afterbegin", galleryPic);

// const instance = basicLightbox.create(`<img src="" alt="" width="800" height="600"/>`, {
//     onShow: (instance) => {
//         window.addEventListener('keydown', onEscClose)
//     },
//     onClose: (instance) => {
//         window.removeEventListener('keydown', onEscClose)
//     }
// });

// function setModalSrc(url) {
//     instance.element().querySelector('img').src = url;
// };

// const onEscClose = function (event) {
//     if (event.code === "Escape") {
//         instance.close();
//     };
//     if (event.code === 'ArrowLeft') {
//         currentIndex -= 1;
//         if (currentIndex <= 0) {
//             currentIndex = galleryItems.length - 1;
//         }
//         setModalSrc(galleryItems[currentIndex].original);
//     };
//     if (event.code === 'ArrowRight') {
//         currentIndex += 1;
//         if (currentIndex >= galleryItems.length - 1) {
//             currentIndex = 0;
//         }
//         setModalSrc(galleryItems[currentIndex].original);
//     }
// };
const openOriginal = function (event) {
    const lightbox = new SimpleLightbox('.gallery a', {
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });
    // const lightbox = $('.gallery a').simpleLightbox({
    //     captionType: 'attr',
    //     captionsData: 'alt',
    //     captionPosition: 'bottom',
    //     captionDelay: '250'
    // });
    
    event.preventDefault();
    gallery.addEventListener("click", openOriginal)
    // if (event.target.nodeName !== 'IMG') return;
    // currentIndex = Number(event.target.dataset.index);
    // console.log(currentIndex);
    // setModalSrc(event.target.dataset.source);
    // instance.show();
};


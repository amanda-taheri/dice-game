'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    //modal.style.display = 'block';
  });
}

// closeModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

const closeModalFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log('assasa');
};

closeModal.addEventListener('click', closeModalFunc);

overlay.addEventListener('click', closeModalFunc);
console.log(showModal);

document.addEventListener('keydown', function (e) {
  //console.log(e.key);

  //   if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) {
  //       closeModalFunc();
  //     }
  //   }
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFunc();
  }
});

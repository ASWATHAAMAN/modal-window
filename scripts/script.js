`use strict`;

// select elements
const buttonOneEl = document.getElementById(`btn-one`);
const buttonTwoEl = document.getElementById(`btn-two`);
const buttonThreeEl = document.getElementById(`btn-three`);
const closeButtonEl = document.getElementById(`close-btn`);
const modalContainerEl = document.getElementById(`modal-container`);
const overlayEl = document.getElementById(`overlay`);
// global variables

// functions
const init = function () {
  modalContainerEl.classList.add(`close`);
};

const openModal = () => {
  overlayEl.classList.remove(`close`);
  overlayEl.classList.add(`open`);
  modalContainerEl.classList.remove(`close`);
  modalContainerEl.classList.add(`open`);
};

const closeModal = () => {
  overlayEl.classList.remove(`open`);
  overlayEl.classList.add(`close`);
  modalContainerEl.classList.remove(`open`);
  modalContainerEl.classList.add(`close`);
};

const defaultOverlay = () => {
  overlayEl.classList.add(`close`);
};

// event listeners
buttonOneEl.addEventListener(`click`, openModal);
buttonTwoEl.addEventListener(`click`, openModal);
buttonThreeEl.addEventListener(`click`, openModal);
closeButtonEl.addEventListener(`click`, closeModal);
document.addEventListener(`keydown`, (event) => {
  if (event.key === `Escape`) {
    closeModal();
  }
});

// initial settings
init();
defaultOverlay();

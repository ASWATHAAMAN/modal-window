`use strict`;

// select elements

const buttonOneEl = document.getElementById(`btn-one`);
const buttonTwoEl = document.getElementById(`btn-two`);
const buttonThreeEl = document.getElementById(`btn-three`);
const closeButtonEl = document.getElementById(`close-btn`);
const modalContainerEl = document.getElementById(`modal-container`);
// global variables

// functions
 const init = function(){
  modalContainerEl.classList.add(`close`);
 };
  
// event listeners

// initial settings
init();
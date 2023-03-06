//<-- Effects to happen while modal being opened ----->

// Here the eval() is a function which parses string as a script for ex: eval('2 + 2') will be 4 .
function modalEventListener(modal, element, event, task) {
    const main = document.querySelector("#main");
    const navbar = document.querySelector("#navbar");
    element.addEventListener(event, () => {
      eval(`modal.classList.${task}('modalOn')`);
      eval(`main.classList.${task}('blurOn')`);
      eval(`navbar.classList.${task}('blurOn')`);
    });
  }

  //<-- Handling modal ----->

//This function is written so that it can be used by both 'addModal' and 'updateModal'.
export function handleModal(modal, toOpen) {
    const modalClose = document.querySelectorAll(".close");
    const addForm = document.querySelector("#addForm");
    const updateForm = document.querySelector("#updateForm");
  
    modalEventListener(modal, toOpen, "click", "add");
    Array.from(modalClose).forEach((e) => {
      modalEventListener(modal, e, "click", "remove");
    });
    modalEventListener(modal, addForm, "submit", "remove");
    modalEventListener(modal, updateForm, "submit", "remove");
  }
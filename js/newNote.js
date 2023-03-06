// This function creates a note every time it's called -> createNote(data) .
/*  NOTE : The parameter of the function will be this "createNote(data)" rather than this "createNote('title','description')"
because here the concept of DESTRUCTURING is used where title and description will be destructered from data.*/
export function createNote(key,{ title, description }) {
    const cardContainer = document.querySelector("#cardContainer");
    cardContainer.innerHTML += `<div class="card" data-key=${key}>
                                  <h3 class="card__title">${title}</h3>
                                  <p class="card__description">${description}</p>
                                  <div class="card__iconContainer">
                                      <i class="fa-regular fa-trash-can delete" ></i>
                                      <i class="fa-solid fa-pen-to-square update"></i>
                                  </div>
                              </div>`;
  }
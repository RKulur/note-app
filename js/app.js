import { handleModal } from "./modal.js";
import { createNote } from "./newNote.js";
import { dataFromForm } from "./handleData.js";

//<----- HANDLE ADD MODAL -------------------------------------->

const addBtn = document.querySelector("#addBtn");
const addModal = document.querySelector("#addModal");
handleModal(addModal, addBtn);

//<----- POSTING DATA TO LOCAL STORAGE ------------------------->

const addForm = document.querySelector("#addForm");
const key = localStorage.length + 1
dataFromForm(key, addForm);

//<----- RETRIEVE DATA FROM LOCAL STORAGE ---------------------->

function retrieveData() {
  for (let i of Object.keys(localStorage).sort()) {
    let data = JSON.parse(localStorage.getItem(i));
    createNote(i,data);
  }
}

retrieveData();

//<----- DELETING DATA FROM LOCAL STORAGE ---------------------->

function deleteData(key) {
  localStorage.removeItem(key);
}

const cards = document.querySelectorAll(".card");

Array.from(cards).forEach((e, index) => {
  e.querySelector(".delete").addEventListener("click", () => {
    let isConfirmed = confirm("This note will be deleted permanently ?");
    let key = e.dataset.key;
    console.log(key)

    if (isConfirmed) {
      deleteData(key);
      window.location.reload();
    }
  });
});

//<----- UPDATING DATA OF LOCAL STORAGE ------------------------->

const updateModal = document.querySelector("#updateModal");
const updateForm = document.querySelector("#updateForm");

Array.from(cards).forEach((e, index) => {
  let updateBtn = e.querySelector(".update");
  handleModal(updateModal, updateBtn);

  
  
  updateBtn.addEventListener("click", () => {
    let key = e.dataset.key;
    console.log(key)
    let data = JSON.parse(localStorage.getItem(key));
    document.querySelector("#updateTitle").value = data.title;
    document.querySelector("#updateDescription").value = data.description;

    dataFromForm(key, updateForm);
  });
});

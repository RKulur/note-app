export function dataFromForm(key, form) {
  let data;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    data = Object.fromEntries(new FormData(form).entries()); // -----> This line extracts the data from 'form' as an 'Object'.
    localStorage.setItem(key, JSON.stringify(data)); // -----> This will be same for both posting data and updating data.
    window.location.reload(); //-----> This reloads the page to update the DOM
    form.reset();
  });
}

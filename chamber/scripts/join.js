document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.dataset.modal;
    document.getElementById(id).showModal();
  });
});

document.querySelectorAll("dialog button").forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog").close();
  });
});

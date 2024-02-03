const openModalBtn = document.querySelector(".open-modal__btn"),
      modal = document.querySelector(".modal");
      modalContent = document.querySelector(".modal-content");
      closeBtn= document.querySelector(".close__btn");


openModalBtn.addEventListener("click", function () {
    modal.classList.remove("hide")
    modal.classList.add("show")
})

closeBtn.addEventListener("click", function () {
    modal.classList.remove("show")
    modal.classList.add("hide")
})

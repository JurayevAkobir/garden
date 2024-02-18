window.addEventListener("DOMContentLoaded", () => {

    const openModalBtn = document.querySelector(".open-modal__btn"),
        modal = document.querySelector(".modal"),
        modalContent = document.querySelector(".modal-content"),
        closeBtn = document.querySelector(".close__btn");

    function showModal() {
        modal.classList.remove("hide");
        modal.classList.add("show");
        modal.classList.add("fade");
        document.body.style.overflow = "hidden";
    }

    function hideModal() {
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = "";
    }

    openModalBtn.addEventListener("click", showModal);
    closeBtn.addEventListener("click", hideModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            hideModal();
        }
    })

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            hideModal();
        }
    })

    setTimeout(showModal, 3000)
})
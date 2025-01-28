// const editVolunteerBtn = document.querySelector(".nav__volunteer-btn");
// const editAssistanceBtn = document.querySelector(".nav__assistance-btn");

// const editVolunteerModal = document.querySelector(".volunteer_modal");
// const editAssistanceModal = document.querySelector(".assistance_modal");

// const editFormElement = document.querySelector(".modal__form");

// const cardModal = document.querySelector("#add-card-modal");
// const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
// const cardModalSubmitBtn = cardModal.querySelector(".modal__submit-btn");

// const cardNameInput = cardModal.querySelector("#add-card-name-input");
// const cardPhoneInput = cardModal.querySelector("#add-card-phone-input");
// const cardZipInput = cardModal.querySelector("#add-card-zip-input");
// const cardEmailInput = cardModal.querySelector("#add-card-email-input");

// const cardForm = cardModal.querySelector(".modal__form");

// function handleFormSubmit(evt) {
//   evt.preventDefault();
//   const inputValues = {
//     name: cardNameInput.value,
//     phone: cardPhoneInput.value,
//     zip: cardZipInput.value,
//     email: cardEmailInput.value,
//   };
//   renderCard(inputValues);
//   cardForm.requestFullscreen();
//   disableButton();
//   closeModal(cardModal);
// }

// const popups = document.querySelectorAll(".modal");

// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("modal_opened")) {
//       closeModal(popup);
//     }
//     if (evt.target.classList.contains("modal__close-btn")) {
//       closeModal(popup);
//     }
//   });
// });

// function closeOnEscPress(event) {
//   if (event.key === "Escape") {
//     const openModal = document.querySelector(".modal_opened");
//     closeModal(openModal);
//   }
// }
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keyup", closeOnEscPress);
// }
const requestAssistanceButton = document.querySelector(".form__assistance-btn");
const submitVolunteerButton = document.querySelector(".form__volunteer-btn");

requestAssistanceButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Thank you for your submission!");
});

submitVolunteerButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Thank you for your contribution!");
});

const formVictim = document.querySelector("#victimForm");
const formVolunteer = document.querySelector("#volunteerForm");

function handleVictimFormSubmit(evt) {
  evt.preventDefault();
  formVictim.reset();
}
formVictim.addEventListener("submit", handleVictimFormSubmit);

function handleVolunteerFromSubmit(evt) {
  evt.preventDefault();
  formVolunteer.reset();
}
formVolunteer.addEventListener("submit", handleVolunteerFromSubmit);

// const cardModal = document.querySelector("#modal-assistance");
const requestAssistanceButton = document.querySelector(".form__assistance-btn");
const submitVolunteerButton = document.querySelector(".form__volunteer-btn");

requestAssistanceButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Thank you for your submission! You will be connected soon.");
  formVictim.reset();
  disableButton(requestAssistanceButton, settings);
});

submitVolunteerButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Thank you for your contribution! You will be contacted shortly.");
  formVolunteer.reset();
  disableButton(submitVolunteerButton, settings);
});

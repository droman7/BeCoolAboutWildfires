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

const requestAssistanceButton = document.querySelector(".form__assistance-btn");
const submitVolunteerButton = document.querySelector(".form__volunteer-btn");

requestAssistanceButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Thank you for your submission");
  formVictim.reset();
});

submitVolunteerButton.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Thank you for your contribution!");
  formVolunteer.reset();
});

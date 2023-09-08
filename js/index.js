document.addEventListener("DOMContentLoaded", () => {
  const pCardAdd = document.querySelector(".pCard_add");
  const pCardCard = document.querySelector(".pCard_card");
  const pCardAddIcon = document.querySelector(".pCard_add i");

  if (pCardAdd && pCardCard && pCardAddIcon) {
    pCardAdd.addEventListener("click", () => {
      pCardCard.classList.toggle("pCard_on");
      pCardAddIcon.classList.toggle("fa-minus");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date().getDay();
  const currentDay = daysOfWeek[today];

  // Update the element with the current day of the week
  const currentDayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  currentDayElement.textContent = currentDay;

  // Get the current UTC time
  const currentTime = new Date().toUTCString();

  // Update the element with the current UTC time
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  currentUTCTimeElement.textContent = currentTime;
});

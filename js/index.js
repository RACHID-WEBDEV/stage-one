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
  const currentDayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const timeElem = document.querySelector('[data-testid="currentUTCTime"]');

  const setValue = (elem, val) => {
    elem.innerHTML = val;
  };
  setValue(currentDayElement, daysOfWeek[new Date().getUTCDay()]);
  window.setInterval(() => {
    setValue(currentDayElement, daysOfWeek[new Date().getUTCDay()]);
  }, 60000);
  const timer = () => {
    window.setInterval(() => {
      setValue(timeElem, Date.now());
    }, 100);
  };
  timer();
});

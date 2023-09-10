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

  const currentDayElements = document.querySelectorAll(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const timeElements = document.querySelectorAll(
    '[data-testid="currentUTCTime"]'
  );

  const setValue = (elem, val) => {
    elem.innerHTML = val;
  };

  currentDayElements.forEach(function (element) {
    setValue(element, daysOfWeek[new Date().getUTCDay()]);
  });

  timeElements.forEach(function (element) {
    window.setInterval(() => {
      setValue(element, Date.now());
    }, 100);
  });
});

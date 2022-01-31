window.addEventListener('DOMContentLoaded', () => {

  const secHands = document.querySelector(".seconds-hand");
  const minHands = document.querySelector(".minutes-hand");
  const hourHands = document.querySelector(".hours-hand");

  function setDate() {
    // new Date() vs. Date() 的不同之處
    const now = new Date();

    const seconds = now.getSeconds();
    const secRotate = ((seconds / 60) * 360) + 90;
    secHands.style.transform = `rotate(${secRotate}deg)`;

    const minutes = now.getMinutes();
    const minRotate = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHands.style.transform = `rotate(${minRotate}deg)`;

    const hours = now.getHours();
    const hourRotate = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHands.style.transform = `rotate(${hourRotate}deg)`;
  }

  setInterval(setDate, 1000);
});
window.addEventListener('DOMContentLoaded', () => {

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);

  window.addEventListener('click', clickKey);

  function clickKey(e) {
    const audio65 = document.querySelector(`audio[data-key="65"]`);
    const audio83 = document.querySelector(`audio[data-key="83"]`);
    const audio68 = document.querySelector(`audio[data-key="68"]`);
    const audio70 = document.querySelector(`audio[data-key="70"]`);
    const audio71 = document.querySelector(`audio[data-key="71"]`);
    const audio72 = document.querySelector(`audio[data-key="72"]`);
    const audio74 = document.querySelector(`audio[data-key="74"]`);
    const audio75 = document.querySelector(`audio[data-key="75"]`);
    const audio76 = document.querySelector(`audio[data-key="76"]`);

    if (e.target.innerHTML === "A") audio65.currentTime = 0, audio65.play(), document.querySelector(`div[data-key="65"]`).classList.add("playing");
    if (e.target.innerHTML === "S") audio83.currentTime = 0, audio83.play(), document.querySelector(`div[data-key="83"]`).classList.add("playing");
    if (e.target.innerHTML === "D") audio68.currentTime = 0, audio68.play(), document.querySelector(`div[data-key="68"]`).classList.add("playing");
    if (e.target.innerHTML === "F") audio70.currentTime = 0, audio70.play(), document.querySelector(`div[data-key="70"]`).classList.add("playing");
    if (e.target.innerHTML === "G") audio71.currentTime = 0, audio71.play(), document.querySelector(`div[data-key="71"]`).classList.add("playing");
    if (e.target.innerHTML === "H") audio72.currentTime = 0, audio72.play(), document.querySelector(`div[data-key="72"]`).classList.add("playing");
    if (e.target.innerHTML === "J") audio74.currentTime = 0, audio74.play(), document.querySelector(`div[data-key="74"]`).classList.add("playing");
    if (e.target.innerHTML === "K") audio75.currentTime = 0, audio75.play(), document.querySelector(`div[data-key="75"]`).classList.add("playing");
    if (e.target.innerHTML === "L") audio76.currentTime = 0, audio76.play(), document.querySelector(`div[data-key="76"]`).classList.add("playing");
  }
});
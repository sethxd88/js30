window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio) return;

    audio.play();

    console.log(audio);
    // console.log(e.keyCode);
  });

  console.log("Hi");

});
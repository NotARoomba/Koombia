//http://tts.cyzon.us/tts <- funny tts request thing;
window.onload = function() {
  const btn = document.getElementById("tts");
  btn.addEventListener("click", async function() { await tts() })
  async function tts() {
    const requestOptions = {
      method: "GET",
      mode: "no-cors"
    }
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const buffer = await fetch('https://tts.cyzon.us/tts?text=' + encodeURI("aeoiu"), requestOptions)
      .then(res => res.arrayBuffer())
      .then(ArrayBuffer => context.decodeAudioData(ArrayBuffer)).then(buffer => {
        console.log(buffer)
        const audio = new Audio(buffer)
        audio.play()
      });
    return;
  }
}
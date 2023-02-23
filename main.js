const context = new AudioContext(); // 모든 웹 오디오 기능의 모체가 된다. 오디오 노드를 만들고 재생/정지를 할 수 있다.
const osc = new OscillatorNode(context);
const amp = new GainNode(context, { gain: 0.5 });
osc.connect(map).copnnect(context.destination);
osc.start();

// 브라우저가 소리를 재생하기 위해서 유저 제스처가 필요하다.
window.addEventListener('load', () => {
  const buttonE1 = document.getElementById('start-audio');
  buttonE1.disabled = false;
  buttonE1.addEventListener('click', () => context.resume());
});

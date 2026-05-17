import { bindUI } from './ui.js';
import { createGame } from './game.js';
import { bindControls } from './controls.js';
import { initAudio } from './audio.js';

const ui = bindUI();
const game = createGame(ui);
bindControls(ui, game.input, game.actions);
initAudio();

if ('serviceWorker' in navigator) {
  addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}

function loop(){ game.tick(); requestAnimationFrame(loop); }
loop();

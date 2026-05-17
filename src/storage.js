const KEY = 'mobile3d.bestLap';
export function loadBestLap(){ const v = Number(localStorage.getItem(KEY)); return Number.isFinite(v)&&v>0?v:Infinity; }
export function saveBestLap(v){ if(Number.isFinite(v)&&v>0) localStorage.setItem(KEY, String(v)); }

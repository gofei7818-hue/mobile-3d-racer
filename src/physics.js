import {halfOuterW,halfOuterH,halfInnerW,halfInnerH} from './constants.js';
export const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
export const lerp = (a,b,t)=>a+(b-a)*t;
export function onTrack(x,z){ return (Math.abs(x)<=halfOuterW&&Math.abs(z)<=halfOuterH)&&!(Math.abs(x)<=halfInnerW&&Math.abs(z)<=halfInnerH); }
export function nearestTrackPoint(x,z){ let nx=clamp(x,-halfOuterW,halfOuterW), nz=clamp(z,-halfOuterH,halfOuterH); if(Math.abs(nx)<halfInnerW&&Math.abs(nz)<halfInnerH){ const dx=halfInnerW-Math.abs(nx), dz=halfInnerH-Math.abs(nz); if(dx<dz) nx=Math.sign(nx||1)*halfInnerW; else nz=Math.sign(nz||1)*halfInnerH; } return {x:nx,z:nz}; }
export function progressParam(x,z){ const laneW=(halfInnerW+halfOuterW)/2,laneH=(halfInnerH+halfOuterH)/2,ax=clamp(x,-laneW,laneW),az=clamp(z,-laneH,laneH),dx=Math.abs(Math.abs(ax)-laneW),dz=Math.abs(Math.abs(az)-laneH),per=2*(2*laneW+2*laneH); let t=0; if(dz<dx){ if(az<0){t=((ax+laneW)/(2*laneW))*(2*laneW);} else {t=(2*laneW+2*laneH)+((laneW-ax)/(2*laneW))*(2*laneW);} } else if(ax>0){ t=(2*laneW)+((az+laneH)/(2*laneH))*(2*laneH);} else {t=(2*laneW+2*laneH+2*laneW)+((laneH-az)/(2*laneH))*(2*laneH);} return clamp(t/per,0,1); }

import {clamp} from './physics.js';
export function bindControls(ui,input,actions){ let steerPointer=null,steerStartX=0,steerRect=null; const updateSteerDot=()=>{ui.steerDot.style.transform=`translateX(${input.steer*36}px)`;};
 ui.steerArea.addEventListener('pointerdown',e=>{ui.steerArea.setPointerCapture(e.pointerId); steerPointer=e.pointerId; steerRect=ui.steerArea.getBoundingClientRect(); steerStartX=e.clientX;});
 ui.steerArea.addEventListener('pointermove',e=>{ if(steerPointer!==e.pointerId)return; input.steer=clamp((e.clientX-steerStartX)/((steerRect?.width||200)*0.35),-1,1); updateSteerDot();});
 ui.steerArea.addEventListener('pointerup',e=>{ if(steerPointer!==e.pointerId)return; steerPointer=null; input.steer=0; updateSteerDot();});
 ui.steerArea.addEventListener('pointercancel',()=>{steerPointer=null; input.steer=0; updateSteerDot();});
 const hold=(btn,key)=>{ let d=false; const up=(e)=>{e.preventDefault();d=false;input[key]=0}; btn.addEventListener('pointerdown',e=>{e.preventDefault();d=true;input[key]=1}); btn.addEventListener('pointerup',up); btn.addEventListener('pointercancel',up); btn.addEventListener('pointerleave',e=>{if(d)up(e)}); btn.addEventListener('contextmenu',e=>e.preventDefault());};
 hold(ui.btnAccel,'accel'); hold(ui.btnBrake,'brake'); hold(ui.btnHB,'handbrake');
 ui.btnPause.addEventListener('click',actions.togglePause); ui.btnReset.addEventListener('click',actions.resetCar); ui.btnHelp.addEventListener('click',()=>{ui.help.style.display=ui.help.style.display==='block'?'none':'block'}); ui.btnCam.addEventListener('click',actions.switchCam);
 document.addEventListener('gesturestart',e=>e.preventDefault()); document.addEventListener('touchmove',e=>e.preventDefault(),{passive:false}); updateSteerDot();
}

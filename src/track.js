import * as THREE from 'three';
import {outer,inner,startZ,halfInnerW,halfInnerH} from './constants.js';
import {lerp} from './physics.js';
export function buildTrack(scene){
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(400,400),new THREE.MeshStandardMaterial({color:0x103018,roughness:1})); ground.rotation.x=-Math.PI/2; scene.add(ground);
 const trackOuter=new THREE.Mesh(new THREE.PlaneGeometry(outer.w,outer.h),new THREE.MeshStandardMaterial({color:0x2a2f3a,roughness:.95})); trackOuter.rotation.x=-Math.PI/2; trackOuter.position.y=.02; scene.add(trackOuter);
 const grassInner=new THREE.Mesh(new THREE.PlaneGeometry(inner.w,inner.h),new THREE.MeshStandardMaterial({color:0x164c24,roughness:1})); grassInner.rotation.x=-Math.PI/2; grassInner.position.y=.03; scene.add(grassInner);
 const addRectLine=(w,h,y,color)=>{ const geo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-w/2,y,-h/2),new THREE.Vector3(w/2,y,-h/2),new THREE.Vector3(w/2,y,h/2),new THREE.Vector3(-w/2,y,h/2),new THREE.Vector3(-w/2,y,-h/2)]); scene.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color})));};
 addRectLine(outer.w,outer.h,.06,0x556077); addRectLine(inner.w,inner.h,.06,0x2a8f44);
 const startLine=new THREE.Mesh(new THREE.PlaneGeometry(inner.w,1.2),new THREE.MeshStandardMaterial({color:0xffffff,roughness:1})); startLine.rotation.x=-Math.PI/2; startLine.position.set(0,.07,startZ); scene.add(startLine);
 for(let i=0;i<18;i++){const side=i%2===0?1:-1,x=(halfInnerW+2.6)*side,z=lerp(-halfInnerH+6,halfInnerH-6,i/17); const m=new THREE.Mesh(new THREE.ConeGeometry(.7,1.4,10),new THREE.MeshStandardMaterial({color:0xffa43a,roughness:.9})); m.position.set(x,.7,z); scene.add(m);} }

import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';

import { Base } from './Material/base'
import { EarthGeometry } from './Material/earthGeometry'
import { Stars } from './Material/stars'

export async function init() {
	let baseIns = new Base()
	baseIns.init()
	let starInstance = new Stars(baseIns)
	starInstance.genSystem()
	let earthInstance =  new EarthGeometry(baseIns)
	await earthInstance.initEarth()
	const controls = new OrbitControls( baseIns.camera, baseIns.render.domElement );
	document.body.appendChild( baseIns.render.domElement );
	
	controls.update();
	let y = 200
	let z = 0
	
	let font_load = await loadText()
	function allrender () {
		window.requestAnimationFrame(function () {
			controls.update();
			if(y > 0) {
				y = y - 1
				baseIns.camera.position.set(0, y, 20);
			}else{
				baseIns.scene.add(line())
				renderText()
			}
			allrender()
		} );
		baseIns.render.render( baseIns.scene, baseIns.camera );
	}
	function line(){
		const material = new THREE.LineBasicMaterial( { color: 0xffffff } );
		const points = [];
		points.push( new THREE.Vector3( 5, -10, 0 ) );
		points.push( new THREE.Vector3( 5, -13, 0 ) );
		points.push( new THREE.Vector3( -5, -13, 0 ) );
		points.push( new THREE.Vector3( -5, -10, 0 ) );
		points.push( new THREE.Vector3( 5, -10, 0 ) );
		const geometry = new THREE.BufferGeometry().setFromPoints( points );
		const line = new THREE.Line( geometry, material );
		return line
	}
	function loadText(){
		return new Promise((resolve,reject)=>{
			const loader = new THREE.FontLoader();
			loader.load('https://static.yximgs.com/udata/pkg/ks-fanstop-activity/ali-puhui.json',  ( font )=> {
				resolve(font)
			} );
		})
		
	}
	function renderText(){
		if(!font_load) return 
		const geometry = new THREE.TextGeometry( 'welcome', {
			font: font_load,
			size: 1,
			height: 0,
		} );
		var tobj = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: 'white'}));
		tobj.position.set(-2, -12, 0);
		baseIns.scene.add(tobj)
	}
	allrender()
	
}


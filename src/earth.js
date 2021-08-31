import * as THREE from 'three/build/three.module.js';
import { Stars } from './Material/stars'
export function init() {
	const camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,1,500)
	const scene = new THREE.Scene()
	const render = new THREE.WebGLRenderer()

	//设置渲染器
	render.setSize(window.innerWidth,window.innerHeight)
	document.body.appendChild(render.domElement)

	//设置场景
	scene.background = new THREE.Color( 0x020924 );
	// scene.fog = new THREE.Fog( 0x020924, 200, 1000 );

	//设置相机位置
	camera.position.set(0, 0, 20);
	camera.lookAt( scene.position  );

	let starInstance = new Stars()
	let stars = starInstance.genSystem()
	scene.add(stars)

	document.body.appendChild( render.domElement );

	window.requestAnimationFrame(function () {
		render.render( scene, camera );
	} );
}


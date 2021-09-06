import * as THREE from 'three/build/three.module.js';

export class Base {
	camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,1,500)
	scene = new THREE.Scene()
	render = new THREE.WebGLRenderer()
	init (){
		//设置渲染器
		this.render.setSize(window.innerWidth,window.innerHeight)
		document.body.appendChild(this.render.domElement)

		//设置场景
		this.scene.background = new THREE.Color( 0x020924 );
		// scene.fog = new THREE.Fog( 0x020924, 200, 1000 );

		//设置相机位置
		this.camera.position.set(0, 0, 20);
		this.camera.lookAt( this.scene.position  );
	}
    getInstance(){
        return {
            camera:this.camera,
            scene:this.scene,
            render:this.render,
        }
    }
}
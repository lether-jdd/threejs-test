import * as THREE from 'three/build/three.module.js';
export class Stars{
    geometry = new THREE.BufferGeometry();
    starsMaterial = null
    //生成几何体
    genGeometry(){
        const positions = [];
        const colors = [];
        for (var i = 0; i < 10000; i ++) {
            var vertex = new THREE.Vector3();
            vertex.x = Math.random() * 2 - 1;
            vertex.y = Math.random() * 2 - 1;
            vertex.z = Math.random() * 2 - 1;
            positions.push( vertex.x, vertex.y, vertex.z );
            var color = new THREE.Color();
            color.setHSL( Math.random() * 0.2 + 0.5, 0.55, Math.random() * 0.25 + 0.55 );
            colors.push( color.r, color.g, color.b );
        }
        this.geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
        this.geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
    }
    setMaterial(){
        this.starsMaterial = new THREE.ParticleBasicMaterial( {
            // map: texture,
            size: 1,
            transparent: true,
            opacity: 1,
            vertexColors: true, //true：且该几何体的colors属性有值，则该粒子会舍弃第一个属性--color，而应用该几何体的colors属性的颜色
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        } );
    }
    genSystem(){
        this.genGeometry()
        this.setMaterial()
        let stars = new THREE.ParticleSystem( this.geometry, this.starsMaterial );
        stars.scale.set( 300, 300, 300 );
        return stars
    }
}
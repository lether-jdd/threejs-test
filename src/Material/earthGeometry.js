import * as THREE from 'three/build/three.module.js';

import { Base } from './base'

export class EarthGeometry{
    globeMesh = null
    group = new THREE.Group();
    constructor(baseIns){
        this.baseIns = baseIns
    }
    async initEarth(){
        return new Promise((resolve,reject) => {
            var globeTextureLoader = new THREE.TextureLoader()
            globeTextureLoader.load( 'https://static.yximgs.com/udata/pkg/ks-fanstop-activity/earth.png',  ( texture )=> {
                this.genEarth(texture)
                resolve()
            } ,function ( err ) {
                console.error(111, err);
            },function ( err ) {
                console.error( err);
                reject()
            });
        })
        
    }
    genEarth(texture){
        var globeGgeometry = new THREE.SphereGeometry( 5, 10, 10 );
        console.log('earth  loaded')
        // todo  与MeshStandardMaterial的区别
        var globeMaterial = new THREE.MeshBasicMaterial( { map: texture } );
        this.globeMesh = new THREE.Mesh( globeGgeometry, globeMaterial );
        //正好是中国
        this.globeMesh.rotation.set( 0.5, 2.9, 0.1 );
        this.group.add( this.globeMesh );
        this.baseIns.scene.add( this.group );
    }
    rotate(){
        // this.globeMesh.rotation.set( 0.5, 2.9, 0.1 );
        this.globeMesh && (this.globeMesh.rotation.z += 0.02)
    }
}

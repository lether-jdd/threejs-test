// import * as window.THREE from 'window.three/build/window.three.module.js';
export function skeleton(){
    var scene = new window.THREE.Scene();
    var geometry = new window.THREE.BoxGeometry(100, 100, 100); 
//     var geometry = new window.THREE.Geometry();

// geometry.vertices.push(
// 	new window.THREE.Vector3( -10,  10, 0 ),
// 	new window.THREE.Vector3( -10, -10, 0 ),
// 	new window.THREE.Vector3(  10, -10, 0 )
// );
    console.log('几何体顶点位置数据',geometry.vertices);
    var material = new window.THREE.MeshBasicMaterial( {color: 0xffff00} );
    var cylinder = new window.THREE.Mesh( geometry, material );
    scene.add( cylinder );

    // var geometry = new window.THREE.CylinderGeometry( 15, 5, 120, 32 );
    // var material = new window.THREE.MeshBasicMaterial( {color: 0xffff00} );
    // var cylinder = new window.THREE.Mesh( geometry, material );
    // scene.add( cylinder );
    // geometry.translate(0, 60, 0); 
    // console.log(cylinder.vertices)

    // var geometry = new window.THREE.CylinderGeometry(5, 10, 120, 50, 300);
    // geometry.translate(0, 60, 0); //平移后，y分量范围[0,120]
    // console.log("name", geometry); 


    // const axis = new window.THREE.AxesHelper(1000)
    // scene.add(axis)
    // //环境光
    // var ambient = new window.THREE.AmbientLight(0x444444);
    // scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    var camera = new window.THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(0, 60, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

    

    // for (var i = 0; i < geometry.vertices.length; i++) {
    //   var vertex = geometry.vertices[i]; //第i个顶点
    //   if (vertex.y <= 60) {
    //     // 设置每个顶点蒙皮索引属性  受根关节Bone1影响
    //     geometry.skinIndices.push(new window.THREE.Vector4(0, 0, 0, 0));
    //     // 设置每个顶点蒙皮权重属性
    //     // 影响该顶点关节Bone1对应权重是1-vertex.y/60
    //     geometry.skinWeights.push(new window.THREE.Vector4(1 - vertex.y / 60, 0, 0, 0));
    //   } else if (60 < vertex.y && vertex.y <= 60 + 40) {
    //     // Vector4(1, 0, 0, 0)表示对应顶点受关节Bone2影响
    //     geometry.skinIndices.push(new window.THREE.Vector4(1, 0, 0, 0));
    //     // 影响该顶点关节Bone2对应权重是1-(vertex.y-60)/40
    //     geometry.skinWeights.push(new window.THREE.Vector4(1 - (vertex.y - 60) / 40, 0, 0, 0));
    //   } else if (60 + 40 < vertex.y && vertex.y <= 60 + 40 + 20) {
    //     // Vector4(2, 0, 0, 0)表示对应顶点受关节Bone3影响
    //     geometry.skinIndices.push(new window.THREE.Vector4(2, 0, 0, 0));
    //     // 影响该顶点关节Bone3对应权重是1-(vertex.y-100)/20
    //     geometry.skinWeights.push(new window.THREE.Vector4(1 - (vertex.y - 100) / 20, 0, 0, 0));
    //   }
    // }
    // // 材质对象
    // var material = new window.THREE.MeshPhongMaterial({
    //   skinning: true, //允许蒙皮动画
    //   // wireframe:true,
    // });
    // // 创建骨骼网格模型
    // var SkinnedMesh = new window.THREE.SkinnedMesh(geometry, material);
    // SkinnedMesh.position.set(50, 120, 50); //设置网格模型位置
    // SkinnedMesh.rotateX(Math.PI); //旋转网格模型
    // scene.add(SkinnedMesh); //网格模型添加到场景中





    /**
     * 创建渲染器对象
     */
    var renderer = new window.THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);//设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    renderer.render(scene, camera);

  
}
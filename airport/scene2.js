"use strict";

//
// 		J. Madeira - April 2021
//

// To store the scene graph, and elements usefull to rendering the scene
const sceneElements = {
    sceneGraph: null,
    camera: null,
    renderer: null,
};


// Functions are called
//  1. Initialize the empty scene
//  2. Add elements within the scene
//  3. Animate
helper.initEmptyScene(sceneElements);
createGrass(sceneElements.sceneGraph);
//load3DObjects(sceneElements.sceneGraph);


function createGrass(sceneGraph) {
    const geometry = new THREE.PlaneGeometry(1000, 1000);
    const texture = new THREE.TextureLoader().load('images/relva.jpg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    const grassMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const grass = new THREE.Mesh(geometry, grassMaterial);
    grass.rotation.x = -0.5 * Math.PI;
    sceneGraph.add(grass);
}

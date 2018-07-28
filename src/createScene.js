import * as BABYLON from 'babylonjs'
import {LavaMaterial} from 'babylonjs-materials'

import starNoise from '../assets/star_noise.png'
import starDiffuse from '../assets/star.jpg'
import lensFlare from '../assets/lensflare.png'

var canvas = document.getElementById('renderCanvas');
export const engine = new BABYLON.Engine(canvas, true);

export const createScene = function() {
    // Create a basic BJS Scene object.
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0,0,0)
   //Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, -1000));
    camera.attachControl(canvas, true);
    //Lighting
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

    //Star materials
    var starMaterial = new LavaMaterial("lava", scene);
    starMaterial.speed = 0.05
    starMaterial.noiseTexture = new BABYLON.Texture(starNoise, scene); // Set the bump texture
    starMaterial.diffuseTexture = new BABYLON.Texture(starDiffuse, scene); // Set the diffuse texture

    // Add a star
    var star = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:200}, scene);
    star.position.y = 1;
    star.material = starMaterial

    // Return the created scene.
    return scene;
}

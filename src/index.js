import {createScene, engine} from './createScene'

const scene = createScene()
engine.runRenderLoop(function() {
    scene.render()
})

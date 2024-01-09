import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-8, 8, 8);

// Import the canvas element
const canvas = document.getElementById('canvas');

// Create a WebGLRenderer and set its width and height
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    // Antialiasing is used to smooth the edges of what is rendered
    antialias: true,
    // Activate the support of transparency
    alpha: false
});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Create the controls
const controls = new OrbitControls(camera, canvas);

// Handle the window resize event
window.addEventListener('resize', () => {
    // Update the camera
    camera.aspect =  window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
});

// Instantiate the loader
const computer = new GLTFLoader();

// Load a GLTF resource
computer.load(
  // URL to the GLTF resource
  'BaseV2.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    scene.add( gltf.scene );

    // You might want to call the render or animate function here
  },

  // Called while loading is progressing
  function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  },

  // Called when loading has errors
  function ( error ) {
    console.log( 'An error happened' );
  }
);

const ambientLight = new THREE.AmbientLight(0x9999ff, 0.8); // soft white light
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
light.castShadow = true;
scene.add(light);
// Create the animation loop
const animate = () => {
    // Call animate recursively
    requestAnimationFrame(animate);

    // Update the controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

// Call animate for the first time
animate();

scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);
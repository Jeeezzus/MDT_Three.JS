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
    alpha: true
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
  'models/color/color.glb',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add( gltf.scene );
    gltf.scene.scale.set(10, 10, 10)
    gltf.scene.rotation.y = Math.PI/16;

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

// Instantiate the loader
const chair = new GLTFLoader();

// Load a GLTF resource
chair.load(
  // URL to the GLTF resource
  'models/antique_wooden_chair.glb',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add( gltf.scene );
    gltf.scene.scale.set(6, 6, 6)
    gltf.scene.position.set(-5,-4.5,3)
    gltf.scene.rotation.y = Math.PI / 2;

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

// Instantiate the loader
const desk = new GLTFLoader();
desk.load(
    // URL to the GLTF resource
    'models/victorian_style_tabledesk.glb',
    
    // Called when the resource is loaded
    function ( gltf ) {
        gltf.scene.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
      scene.add( gltf.scene );
      gltf.scene.scale.set(0.02, 0.02, 0.02)
      gltf.scene.position.set(-1,1,0)
      gltf.scene.rotation.y = Math.PI;
  
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

  // Instantiate the loader
const lamp = new GLTFLoader();

// Load a GLTF resource
lamp.load(
  // URL to the GLTF resource
  'models/lamp_draft.glb',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add( gltf.scene );
    gltf.scene.scale.set(0.5, 0.5, 0.5)
    gltf.scene.position.set(0.5,1.5,-4)
    gltf.scene.rotation.y = -31 * Math.PI/30;

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

const planeGeometry = new THREE.PlaneGeometry(500, 500);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -4.5;
plane.receiveShadow = true;
scene.add(plane);

const fb = new FBXLoader();
let mixer; // For the animation

fb.load('models/Sitting.fbx', (fbx) => {
    // Add the loaded object to the scene
    fbx.traverse(function (node) {
        if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
        }
    });
    scene.add(fbx);
    fbx.scale.set(0.07, 0.07, 0.07)
    fbx.position.set(-6.2,-4.8,0.8)
    fbx.rotation.y = Math.PI / 2;
    fbx.castShadow = true;

    // If the FBX file has animations
    if (fbx.animations && fbx.animations.length > 0) {
        mixer = new THREE.AnimationMixer(fbx);
        fbx.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
        });
    }
}, undefined, (error) => {
    console.error(error);
});



const ambientLight = new THREE.AmbientLight(0x9999ff, 0.5); // soft white light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xfffaf0, 350, 300);
pointLight.position.set(0.5,5,-4);
pointLight.castShadow = true;
scene.add(pointLight);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
light.castShadow = true;
scene.add(light);

const clock = new THREE.Clock();
// Create the animation loop
const animate = () => {
    // Call animate recursively
    requestAnimationFrame(animate);

    // Update the controls
    controls.update();
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);

    // Render the scene
    renderer.render(scene, camera);
}

// Call animate for the first time
animate();

scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);
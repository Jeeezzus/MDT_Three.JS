import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

// Create a scene
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);




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
camera.position.set(12, 12, 12);
controls.position0 =  new THREE.Vector3(15, 20, 15);
controls.target0 = new THREE.Vector3(0, 10, 0); // Orient the camera
controls.reset();
controls.update();

// Handle the window resize event
window.addEventListener('resize', () => {
    // Update the camera
    camera.aspect =  window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
});

const plasticMaterial = new THREE.MeshPhongMaterial({
  color: 0xadd8e6, // Light blue color
  shininess: 100   // Adjust this for the desired shininess
});

const glassMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,   // White color, can be adjusted as needed
  transparent: true,
  opacity: 0.15,      // Adjust for desired opacity
  roughness: 0.2,      // Smooth surface for glass
  metalness: 0.2       // Non-metallic material
});

const textureLoader = new THREE.TextureLoader();

// Adding a background
let textureEquirec = textureLoader.load( 'bg.webp' );
textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
textureEquirec.colorSpace = THREE.SRGBColorSpace;

scene.background = textureEquirec;

const icelMap = textureLoader.load('ice_normal.jpg'); // Replace with your normal map path
const iceMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x6fa1d6,            // White color for ice
  envMap: textureEquirec,     // Environment map for reflections and refractions
  roughness: 1,               // Smooth surface
  transmission: 0.6,          // High transmission for refraction effect
  transparent: true,
  opacity: 0.8,               // Adjust for desired opacity
  reflectivity: 0.5,          // Adjust reflectivity
  clearcoat: 1.0,             // Clearcoat for additional reflection layer
  normalMap: icelMap        // Add the normal map here
});
iceMaterial.normalScale = new THREE.Vector2(1, 0.5); // Adjust x and y scale for intensity

// Instantiate the loader
const corps = new GLTFLoader();

// Load a GLTF resource
corps.load(
  // URL to the GLTF resource
  'models/freezer/corps.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) {
          node.material = plasticMaterial;
      }
  });
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

// Instantiate the loader
const foot = new GLTFLoader();

// Load a GLTF resource
foot.load(
  // URL to the GLTF resource
  'models/freezer/foot.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) {
          node.material = plasticMaterial;
      }
  });
  gltf.scene.rotation.y = Math.PI/1.55;
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

// Instantiate the loader
const gCloche = new GLTFLoader();

// Load a GLTF resource
gCloche.load(
  // URL to the GLTF resource
  'models/freezer/grandeCloche.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) { // Replace with your mesh's name
          node.material = glassMaterial;
      }
  });
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


// Instantiate the loader
const pCloche = new GLTFLoader();

// Load a GLTF resource
pCloche.load(
  // URL to the GLTF resource
  'models/freezer/petiteCloche.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) { // Replace with your mesh's name
          node.material = glassMaterial;
      }
  });
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

// Instantiate the loader
const silcRing = new GLTFLoader();

// Load a GLTF resource
silcRing.load(
  // URL to the GLTF resource
  'models/freezer/silcring.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) {
          node.material = plasticMaterial;
      }
  });
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

// Instantiate the loader
const top = new GLTFLoader();

// Load a GLTF resource
top.load(
  // URL to the GLTF resource
  'models/freezer/top.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) {
          node.material = plasticMaterial;
      }
  });
  
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

// Instantiate the loader
const ice = new GLTFLoader();

// Load a GLTF resource
ice.load(
  // URL to the GLTF resource
  'models/freezer/ice.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) {
          node.material = iceMaterial;
      }
  });
  
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

const ambientLight = new THREE.AmbientLight(0x9999ff, 0.5); // soft white light
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xf2efd0, 2);
light.position.set(-5, 10, -7.5);
light.castShadow = true;
scene.add(light);
// Create the animation loop
const animate = () => {
    // Call animate recursively
    requestAnimationFrame(animate);
    camera.updateProjectionMatrix();
    // Update the controls
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

// Call animate for the first time
animate();

scene.fog = new THREE.FogExp2(0xaaaaaa, 0.01);


import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

//#region creation and controls

// Create a scene
const scene = new THREE.Scene();

//camera and rederer
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.getElementById('canvas');
camera.userData.animating = false;
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
camera.position.set(12, 12, 12);
controls.position0 =  new THREE.Vector3(15, 20, 15);
controls.target0 = new THREE.Vector3(0, 10, 0); // Orient the camera
controls.reset();
controls.update();

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function getCanvasRelativePosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
  };
}

let pointerDownTime = 0;
let allowClick = false;

function onMouseClick(event) {
  if (!allowClick) return;
  const pos = getCanvasRelativePosition(event);

    // Convert the position to normalized device coordinates (NDC)
    mouse.x = (pos.x / canvas.clientWidth) * 2 - 1;
    mouse.y = -(pos.y / canvas.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Perform the raycasting
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        onObjectSelected(intersects[0].object);
    }
}

window.addEventListener('pointerdown', (event) => {
  pointerDownTime = Date.now();
  allowClick = false; // Initially, assume it's not a click
});

window.addEventListener('pointerup', (event) => {
  const timeElapsed = Date.now() - pointerDownTime;
  if (timeElapsed < 200) { // Threshold in milliseconds, e.g., 200ms
      allowClick = true;
      onMouseClick(event); // Call your onMouseClick function if it's a valid click
  }
});

const targetPosition = new THREE.Vector3(10, 10, 10); // Change to your desired position
const moveDistance = 5; // The distance to move the object

let autoRotateSpeed = 0.1; // Speed of auto-rotation
let isAutoRotating = true; // Flag to enable/disable auto-rotation

function updateAutoOrbit() {
    if (isAutoRotating) {
        controls.update();
        controls.autoRotate = true;
        controls.autoRotateSpeed = autoRotateSpeed;
    }
}

controls.addEventListener('start', () => {
  isAutoRotating = false;
  controls.autoRotate = false;
});

let autoRotateTimeout;

function resetAutoRotate() {
    clearTimeout(autoRotateTimeout);
    autoRotateTimeout = setTimeout(() => {
        isAutoRotating = true;
    }, 5000); // 5 seconds of inactivity
}

controls.addEventListener('end', resetAutoRotate);


let ventmoved = false;
function onObjectSelected(object) {
    console.log("Selected object name:", object.name);
    if(object.name == "corps" ){
if(object.moved == false){
      startAnimation(object, object.position.clone(),500,new THREE.Vector3(object.position.x, object.position.y - 20, object.position.z));
      object.moved = true;
} else{
const startPosition = object.position.clone();
          const endPosition = object.defPos; // The target position (origin)
          startAnimation(object, startPosition, 500, endPosition);
object.moved = false;
}
if (object.title && object.desc) {
  const partTitleElement = document.querySelector('.parttitle');
  const partDescriptionElement = document.querySelector('.partdescription');

  if (partTitleElement) {
      partTitleElement.textContent = object.title; // Set the title
  }

  if (partDescriptionElement) {
      partDescriptionElement.textContent = object.desc; // Set the description
  }
}
    }else if(object.name == "foot" ){
if(object.moved == false){
      startAnimation(object, object.position.clone(),500,new THREE.Vector3(object.position.x, object.position.y - 30, object.position.z));
      object.moved = true;
} else{
const startPosition = object.position.clone();
          const endPosition = object.defPos; // The target position (origin)
          startAnimation(object, startPosition, 500, endPosition);
object.moved = false;
}
if (object.title && object.desc) {
  const partTitleElement = document.querySelector('.parttitle');
  const partDescriptionElement = document.querySelector('.partdescription');

  if (partTitleElement) {
      partTitleElement.textContent = object.title; // Set the title
  }

  if (partDescriptionElement) {
      partDescriptionElement.textContent = object.desc; // Set the description
  }
}
    }else if(object.name == "gcloche" ){
if(object.moved == false){
      startAnimation(object, object.position.clone(),500,new THREE.Vector3(object.position.x, object.position.y + 40, object.position.z));
      object.moved = true;
} else{
const startPosition = object.position.clone();
          const endPosition = object.defPos; // The target position (origin)
          startAnimation(object, startPosition, 500, endPosition);
object.moved = false;
}
if (object.title && object.desc) {
  const partTitleElement = document.querySelector('.parttitle');
  const partDescriptionElement = document.querySelector('.partdescription');

  if (partTitleElement) {
      partTitleElement.textContent = object.title; // Set the title
  }

  if (partDescriptionElement) {
      partDescriptionElement.textContent = object.desc; // Set the description
  }
}
    }else if(object.name == "pcloche" ){
if(object.moved == false){
      startAnimation(object, object.position.clone(),500,new THREE.Vector3(object.position.x, object.position.y + 25, object.position.z));
      object.moved = true;
} else{
const startPosition = object.position.clone();
          const endPosition = object.defPos; // The target position (origin)
          startAnimation(object, startPosition, 500, endPosition);
object.moved = false;
}
if (object.title && object.desc) {
  const partTitleElement = document.querySelector('.parttitle');
  const partDescriptionElement = document.querySelector('.partdescription');

  if (partTitleElement) {
      partTitleElement.textContent = object.title; // Set the title
  }

  if (partDescriptionElement) {
      partDescriptionElement.textContent = object.desc; // Set the description
  }
}
    }else if(object.name == "silcring" ){
if(object.moved == false){
      startAnimation(object, object.position.clone(),500,new THREE.Vector3(object.position.x, object.position.y + 7, object.position.z));
      object.moved = true;
} else{
const startPosition = object.position.clone();
          const endPosition = object.defPos; // The target position (origin)
          startAnimation(object, startPosition, 500, endPosition);
object.moved = false;
}
if (object.title && object.desc) {
  const partTitleElement = document.querySelector('.parttitle');
  const partDescriptionElement = document.querySelector('.partdescription');

  if (partTitleElement) {
      partTitleElement.textContent = object.title; // Set the title
  }

  if (partDescriptionElement) {
      partDescriptionElement.textContent = object.desc; // Set the description
  }
}
    }else if(object.name == "top" ){
if(object.moved == false){
      startAnimation(object, object.position.clone(),500,new THREE.Vector3(object.position.x, object.position.y + 9, object.position.z));
      object.moved = true;
} else{
const startPosition = object.position.clone();
          const endPosition = object.defPos; // The target position (origin)
          startAnimation(object, startPosition, 500, endPosition);
object.moved = false;
}
if (object.title && object.desc) {
  const partTitleElement = document.querySelector('.parttitle');
  const partDescriptionElement = document.querySelector('.partdescription');

  if (partTitleElement) {
      partTitleElement.textContent = object.title; // Set the title
  }

  if (partDescriptionElement) {
      partDescriptionElement.textContent = object.desc; // Set the description
  }
}
    }else if(object.name == "ice" ){
if(object.moved == false){
      startAnimation(object, object.position.clone(),500,new THREE.Vector3(object.position.x, object.position.y + 12, object.position.z));
      object.moved = true;
} else{
const startPosition = object.position.clone();
          const endPosition = object.defPos; // The target position (origin)
          startAnimation(object, startPosition, 500, endPosition);
object.moved = false;
}
if (object.title && object.desc) {
  const partTitleElement = document.querySelector('.parttitle');
  const partDescriptionElement = document.querySelector('.partdescription');

  if (partTitleElement) {
      partTitleElement.textContent = object.title; // Set the title
  }

  if (partDescriptionElement) {
      partDescriptionElement.textContent = object.desc; // Set the description
  }
}
    }else if(object.name.includes("v")){
      if(ventmoved == false){
      startAnimation(gltfRootObjects['v2'], gltfRootObjects['v2'].position.clone(),500,new THREE.Vector3(
        gltfRootObjects['v2'].position.x - 10, 
        gltfRootObjects['v2'].position.y, 
        gltfRootObjects['v2'].position.z
        ));
        startAnimation(gltfRootObjects['v4'], gltfRootObjects['v4'].position.clone(),500,new THREE.Vector3(
          gltfRootObjects['v4'].position.x, 
          gltfRootObjects['v4'].position.y, 
          gltfRootObjects['v4'].position.z + 10
        ));
        startAnimation(gltfRootObjects['v6'], gltfRootObjects['v6'].position.clone(),500,new THREE.Vector3(
          gltfRootObjects['v6'].position.x + 10, 
          gltfRootObjects['v6'].position.y, 
          gltfRootObjects['v6'].position.z
        ));
        startAnimation(gltfRootObjects['v8'], gltfRootObjects['v8'].position.clone(),500,new THREE.Vector3(
          gltfRootObjects['v8'].position.x, 
          gltfRootObjects['v8'].position.y, 
          gltfRootObjects['v8'].position.z - 10
        ));
        startAnimation(gltfRootObjects['v1'], gltfRootObjects['v1'].position.clone(),500,new THREE.Vector3(
          gltfRootObjects['v1'].position.x - (0.70710678118*10), 
          gltfRootObjects['v1'].position.y, 
          gltfRootObjects['v1'].position.z - (0.70710678118*10)
        ));
        startAnimation(gltfRootObjects['v5'], gltfRootObjects['v5'].position.clone(),500,new THREE.Vector3(
          gltfRootObjects['v5'].position.x + (0.70710678118*10), 
          gltfRootObjects['v5'].position.y, 
          gltfRootObjects['v5'].position.z + (0.70710678118*10)
        ));
        startAnimation(gltfRootObjects['v7'], gltfRootObjects['v7'].position.clone(),500,new THREE.Vector3(
          gltfRootObjects['v7'].position.x + (0.70710678118*10), 
          gltfRootObjects['v7'].position.y, 
          gltfRootObjects['v7'].position.z - (0.70710678118*10)
        ));
        startAnimation(gltfRootObjects['v3'], gltfRootObjects['v3'].position.clone(),500,new THREE.Vector3(
          gltfRootObjects['v3'].position.x - (0.70710678118*10), 
          gltfRootObjects['v3'].position.y, 
          gltfRootObjects['v3'].position.z + (0.70710678118*10)
        ));
        ventmoved = true;
        }else{
          ventmoved = false;
          for (let key in gltfRootObjects) {
            if (gltfRootObjects.hasOwnProperty(key)) {
                let object = gltfRootObjects[key];
                const startPosition = object.position.clone();
                const endPosition = object.defPos; 
                startAnimation(object, startPosition, 500, endPosition);
            }
          }
          }
        
    }else

    if(object.moved == false & object.name.includes("v") == false){
    startAnimation(object, object.position.clone(),500,targetPosition);
    }
}

document.getElementById('reset-view').addEventListener('click', function() {
  movableObjects.forEach(object => {
          const startPosition = object.position.clone();
          const endPosition = object.defPos; // The target position (origin)
          startAnimation(object, startPosition, 500, endPosition);
          object.moved = false; // Reset the 'moved' flag
          ventmoved = false;
          startAnimation(camera,camera.position.clone(), 1000, new THREE.Vector3(15, 20, 15));
  });
});


// Handle the window resize event
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    camera.aspect = window.innerWidth * 0.6 / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth * 0.6, window.innerHeight);
}

window.addEventListener('mousemove', onMouseMove, false);

let INTERSECTED; // This will keep track of the currently intersected object

function onMouseMove(event) {
  const pos = getCanvasRelativePosition(event);

  // Update the mouse position in normalized device coordinates (NDC)
  mouse.x = (pos.x / canvas.clientWidth) * 2 - 1;
  mouse.y = -(pos.y / canvas.clientHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
        if (INTERSECTED != intersects[0].object) {
            if (INTERSECTED) resetGlow(INTERSECTED); // Reset previous intersection object

            INTERSECTED = intersects[0].object;
            applyGlow(INTERSECTED); // Apply glow effect to the new intersected object
        }
    } else {
        if (INTERSECTED) resetGlow(INTERSECTED);
        INTERSECTED = null;
    }
}


//#endregion

//#region materials
const textureLoader = new THREE.TextureLoader();

const normalMap = textureLoader.load('3DPrint_NormalMap_1K.png');
const plasticMaterial = new THREE.MeshPhongMaterial({
  color: 0xadd8e6, // Light blue color
  shininess: 100,   // Adjust this for the desired shininess
  normalMap: normalMap,
});
plasticMaterial.normalScale = new THREE.Vector2(1, 1);

const plasticBlackMaterial = new THREE.MeshPhongMaterial({
  color: 0x000000, // black color
  shininess: 100   // Adjust this for the desired shininess
});

const glassMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,   // White color, can be adjusted as needed
  transparent: true,
  opacity: 0.15,      // Adjust for desired opacity
  roughness: 0.2,      // Smooth surface for glass
  metalness: 0.2       // Non-metallic material
});



// Adding a background
let textureEquirec = textureLoader.load( 'bg.webp' );
textureEquirec.mapping = THREE.EquirectangularReflectionMapping;
textureEquirec.colorSpace = THREE.SRGBColorSpace;

//scene.background = textureEquirec;

const icelMap = textureLoader.load('ice_normal.jpg'); // Replace with your normal map path
const icetex = textureLoader.load('iceTex.jpg');
const iceMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x6fa1d6,            // White color for ice
  envMap: textureEquirec,     // Environment map for reflections and refractions
  roughness: 1,               // Smooth surface
  transmission: 0.6,          // High transmission for refraction effect
  transparent: true,
  opacity: 0.8,               // Adjust for desired opacity
  reflectivity: 0.5,          // Adjust reflectivity
  clearcoat: 1.0,             // Clearcoat for additional reflection layer
  normalMap: icelMap,        // Add the normal map here
  map: icetex
});
iceMaterial.normalScale = new THREE.Vector2(1, 0.5); // Adjust x and y scale for intensity


function applyGlow(object) {
  if(object.name.includes("v") == false){
    if (!object.originalMaterial) {
        object.originalMaterial = object.material; // Store the original material
    }
    // Clone the original material and modify its emissive property
    object.material = object.originalMaterial.clone();
    object.material.emissive.setHex(0x555555); // Example: set to a light gray color
}else{
  object.material.emissive.setHex(0x555555);
}
}

function resetGlow(object) {
  if(object.name.includes("v") == false){
    if (object.originalMaterial) {
        // Restore the original material
        object.material = object.originalMaterial;
    }
  }else{
    object.material.emissive.setHex(0x000000);
  }
}


//#endregion

//#region object spawning
const gltfRootObjects = {};
let movableObjects = [];
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
          node.name = "corps";
          node.moved = false;
          movableObjects.push(node);
          node.defPos = new THREE.Vector3(0, 0, 0);
          node.title="Corps principal";
          node.desc="Pièce principale de l'assemblage. Elle sert à maintenir toute la structure";
          node.userData = {
            animating: false,
            moved: false,
            startTime: 0,
            startPosition: null,
            endPosition: null,
            duration: 0
        };
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
          node.name = "foot";
          node.moved = false;
movableObjects.push(node);
node.defPos = new THREE.Vector3(0, 0, 0);
          node.title="Base";
          node.desc="Pièce soutenant l'assemblage. Elle sert à assurer un espace suffisant pour l'échapement de l'airdu radiateur";
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
    gltf.scene.name = "gcloche";
    gltf.scene.traverse(function (node) {
      if (node.isMesh) { // Replace with your mesh's name
          node.material = glassMaterial;
          node.name = "gcloche";
          node.moved = false;
movableObjects.push(node);
node.defPos = new THREE.Vector3(0, 0, 0);
node.title="Cloche extérieur";
          node.desc="Cloche en verre transparent servant de paroie isolante extérieur.";
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
          node.name = "pcloche";
          node.moved = false;
movableObjects.push(node);
node.defPos = new THREE.Vector3(0, 0, 0);
node.title="Cloche intérieur";
          node.desc="Cloche en verre transparent servant de paroie isolante intérieur et de contenant pour la glace.";
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
          node.name = "silcring";
          node.moved = false;
movableObjects.push(node);
node.defPos = new THREE.Vector3(0, 0, 0);
node.title="Support à silicone";
          node.desc="Cette pièce en plastique permet de tenier et comprimer le joint silicone entre les cloches et le noyau en métal afin d'assurer une étanchéité au système";
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
          node.name = "top";
          node.moved = false;
movableObjects.push(node);
node.defPos = new THREE.Vector3(0, 0, 0);
node.title="Couvercle";
          node.desc="Pièce décorative cachant le joint en silicone";
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
          node.name = "ice";
          node.moved = false;
movableObjects.push(node);
node.defPos = new THREE.Vector3(0, 0, 0);
node.title="Glace";
          node.desc="Dans cette glace sera stockée une oreille en collagène refermant un manifeste pour la terre, encodé dans le l'ADN";
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
const ventil = new GLTFLoader();
// Load a GLTF resource
ventil.load(
  // URL to the GLTF resource
  'models/freezer/V1.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    movableObjects.push(gltf.scene);
    gltf.scene.defPos = new THREE.Vector3(0, 0, 0);
    gltf.scene.traverse(function (node) {
      if (node.isMesh) {
          node.material = plasticBlackMaterial;
          node.name = "v1";
          node.moved = false;
          
      }
  });
  
    scene.add( gltf.scene );
    gltfRootObjects['v1'] = gltf.scene;
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
// Load a GLTF resource
ventil.load(
  // URL to the GLTF resource
  'models/freezer/V1.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      gltf.scene.rotation.y = Math.PI/4;
      movableObjects.push(gltf.scene);
      gltf.scene.defPos = new THREE.Vector3(0, 0, 0);
      if (node.isMesh) {
          node.material = plasticBlackMaterial;
          node.name = "v2";
          node.moved = false;
      }
  });
  
    scene.add( gltf.scene );
    gltfRootObjects['v2'] = gltf.scene;
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
// Load a GLTF resource
ventil.load(
  // URL to the GLTF resource
  'models/freezer/V1.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      gltf.scene.rotation.y = Math.PI/2;
      movableObjects.push(gltf.scene);
      gltf.scene.defPos = new THREE.Vector3(0, 0, 0);
      if (node.isMesh) {
          node.material = plasticBlackMaterial;
          node.name = "v3";
          node.moved = false;
      }
  });
  
    scene.add( gltf.scene );
    gltfRootObjects['v3'] = gltf.scene;
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
// Load a GLTF resource
ventil.load(
  // URL to the GLTF resource
  'models/freezer/V1.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      gltf.scene.rotation.y = 3* Math.PI/4 ;
      movableObjects.push(gltf.scene);
      gltf.scene.defPos = new THREE.Vector3(0, 0, 0);
      if (node.isMesh) {
          node.material = plasticBlackMaterial;
          node.name = "v4";
          node.moved = false;
          
      }
  });
  
    scene.add( gltf.scene );
    gltfRootObjects['v4'] = gltf.scene;
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

// Load a GLTF resource
ventil.load(
  // URL to the GLTF resource
  'models/freezer/V1.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      gltf.scene.rotation.y = 4* Math.PI/4 ;
      movableObjects.push(gltf.scene);
      gltf.scene.defPos = new THREE.Vector3(0, 0, 0);
      if (node.isMesh) {
          node.material = plasticBlackMaterial;
          node.name = "v5";
          node.moved = false;
      }
  });
  
    scene.add( gltf.scene );
    gltfRootObjects['v5'] = gltf.scene;
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
// Load a GLTF resource
ventil.load(
  // URL to the GLTF resource
  'models/freezer/V1.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      gltf.scene.rotation.y = 5* Math.PI/4 ;
      movableObjects.push(gltf.scene);
      gltf.scene.defPos = new THREE.Vector3(0, 0, 0);
      if (node.isMesh) {
          node.material = plasticBlackMaterial;
          node.name = "v6";
          node.moved = false;
      }
  });
  
    scene.add( gltf.scene );
    gltfRootObjects['v6'] = gltf.scene;
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
// Load a GLTF resource
ventil.load(
  // URL to the GLTF resource
  'models/freezer/V1.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      gltf.scene.rotation.y = 6* Math.PI/4 ;
      movableObjects.push(gltf.scene);
      gltf.scene.defPos = new THREE.Vector3(0, 0, 0);
      if (node.isMesh) {
          node.material = plasticBlackMaterial;
          node.name = "v7";
          node.moved = false;
      }
  });
  
    scene.add( gltf.scene );
    gltfRootObjects['v7'] = gltf.scene;
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
// Load a GLTF resource
ventil.load(
  // URL to the GLTF resource
  'models/freezer/V1.gltf',
  
  // Called when the resource is loaded
  function ( gltf ) {
    gltf.scene.traverse(function (node) {
      gltf.scene.rotation.y = 7* Math.PI/4 ;
      movableObjects.push(gltf.scene);
      gltf.scene.defPos = new THREE.Vector3(0, 0, 0);
      if (node.isMesh) {
          node.material = plasticBlackMaterial;
          node.name = "v8";
          node.moved = false;
      }
  });
  
    scene.add( gltf.scene );
    gltfRootObjects['v8'] = gltf.scene;
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
//#endregion

//#region lighting
const ambientLight = new THREE.AmbientLight(0x9999ff, 0.5); // soft white light
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xf2efd0, 2);
light.position.set(-5, 10, -7.5);
light.castShadow = true;
scene.add(light);
//#endregion

//#region animate

function startAnimation(object, startPosition, duration, endPosition) {
  object.userData.animating = true;
  object.userData.startTime = Date.now();
  object.userData.startPosition = startPosition;
  object.userData.endPosition = endPosition;
  object.userData.duration = duration;
  //console.log("mooving:", object.name);
}

// Create the animation loop
const animate = () => {
    // Call animate recursively
    requestAnimationFrame(animate);
    updateAutoOrbit();
    camera.updateProjectionMatrix();
    // Update the controls
    controls.update();

    const currentTime = Date.now();
    movableObjects.forEach(child => {
        if (child.userData.animating) {
            const elapsedTime = currentTime - child.userData.startTime;
            const fraction = elapsedTime / child.userData.duration;

            if (fraction < 1) {
                child.position.lerpVectors(child.userData.startPosition, child.userData.endPosition, fraction);
            } else {
                child.position.copy(child.userData.endPosition);
                child.userData.animating = false;
            }
        }
    });
    if (camera.userData.animating) {
      const elapsedTime = currentTime - camera.userData.startTime;
      const fraction = elapsedTime / camera.userData.duration;

      if (fraction < 1) {
        camera.position.lerpVectors(camera.userData.startPosition, camera.userData.endPosition, fraction);
      } else {
        camera.position.copy(camera.userData.endPosition);
          camera.userData.animating = false;
      }
  }
    // Render the scene
    renderer.render(scene, camera);
}
//#endregion

// Call animate for the first time
animate();
onWindowResize();


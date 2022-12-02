// zdog-demo.js
const TAU = Zdog.TAU;

// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  zoom: 10,
  dragRotate: true,
  rotate: {y: -TAU/8},
});

//body
let hipX = 3;
let hips = new Zdog.Shape({
  addTo: illo,
  path: [{x: -hipX}, {x: hipX}],
  translate: {y: 2},
  stroke: 4,
  color: '#636',
});

let leg = new Zdog.Shape({
  addTo: hips,
  path: [{y:0}, {y:12}],
  translate: {x:-hipX},
  rotate: {x: TAU/4},
  color: '#636',
  stroke: 4,
});

let foot = new Zdog.RoundedRect({
  addTo: leg,
  width: 2,
  height: 4,
  cornerRadius: 1,
  translate: {y: 14, z: 2},
  rotate: {x: TAU/4},
  color: '#C25',
  fill: true,
  stroke: 4,
});

let standLeg = leg.copy({
  translate: {x:hipX},
  rotate: {x: -TAU/8},
});

foot.copy({
  addTo: standLeg,
  rotate: {x: -TAU/8},
});

let spine = new Zdog.Anchor({
  addTo: hips,
  rotate: {x: TAU/8},
});

let chest = new Zdog.Shape({
  addTo: spine,
  path: [{x: -1.5}, {x: 1.5}],
  translate: {y: -6.5},
  stroke: 9,
  color: '#C25',
});

//arm
const armSize = 6;
let upperArm = new Zdog.Shape({
  addTo: chest,
  path: [{y: 0}, {y: armSize}],
  translate: {x: -5, y: -2},
  rotate: {x: -TAU/4},
  color: '#636',
  stroke: 4,
});

let forearm = new Zdog.Shape({
  addTo: upperArm,
  path: [{y: 0}, {y: armSize}],
  translate: {y: armSize},
  rotate: {x: TAU/8},
  color: '#EA0',
  stroke: 4,
});

//hand
new Zdog.Shape({
  addTo: forearm,
  translate: {y: armSize, z: 1},
  stroke: 6,
  color: '#EA0',
});

upperArm.copyGraph({
  translate: {x: 5, y: -2},
  rotate: {x: TAU/4},
});

// head
let head = new Zdog.Shape({
  addTo: chest,
  stroke: 12,
  translate: {y: -9.5},
  color: '#EA0',
});

//eye
let eye = new Zdog.Ellipse({
  addTo: head,
  diameter: 2,
  quarters: 2, //semi-circle
  translate: {x: -2, y: 1, z: 4.5 },
  rotate: {z: -TAU/4 },
  color: 'aggplant',
  stroke: 0.5,
  backface: false,
});
eye.copy({
  translate: { x: 2, y: 1, z: 4.5 }
});

// smile
new Zdog.Ellipse({
  addTo: head,
  diameter: 3,
  quarters: 2,
  translate: {y: 2.5, z: 4.5},
  rotate: { z: TAU/4 },
  closed: true,
  color: '#FED',
  stroke: 0.5,
  fill: true,
  backface: false,
});



function animate(){
  // update & render
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();


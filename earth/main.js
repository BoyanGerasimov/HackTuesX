import * as THREE from 'three'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const sphere = new THREE.Mesh
(
new THREE.SphereGeometry(7, 50, 50), 
new THREE.MeshBasicMaterial(
  {
    map: new THREE.TextureLoader().load('./img/earth.jpeg')
  }));

scene.add(sphere);

camera.position.z = 25;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
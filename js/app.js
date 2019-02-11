var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera(50, 1, .1, 1000);
	camera.position.z = 9;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry(1, 1, 1);
	material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

}

function animate() {

	requestAnimationFrame(animate);
    mesh.position.x += .05
    if (mesh.position.x > 6) mesh.position.x = -6
	renderer.render(scene, camera);

}
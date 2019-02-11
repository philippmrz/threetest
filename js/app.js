var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera(50, 1, .1, 10);
	camera.position.z = 9;

	scene = new THREE.Scene();

	geometry = new THREE.BoxGeometry(1, 1, 1);
	material = new THREE.MeshBasicMaterial({color: 0xff0000});
    geometry1 = new THREE.BoxGeometry(1, 1, 1);
	material1 = new THREE.MeshNormalMaterial({color: 0x0ff000});
mesh1 = new THREE.Mesh(geometry1, material1);
	scene.add(mesh1);
	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

}

function animate() {
	requestAnimationFrame(animate);
    mesh.position.x += .05
    mesh1.rotation.x += .2
    mesh1.position.y += .2
    if (mesh1.position.y > 6) mesh1.position.y = -6
    if (mesh.position.x > 6) mesh.position.x = -6
	renderer.render(scene, camera);
}
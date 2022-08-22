const table = [
    "M", "Hygen", "23", 1, 1,
    "F", "Hebe", "24", 18, 1,
    "F", "Ling", "35", 1, 2,
    "F", "Berry", "50", 2, 2,
    "F", "Borone", "10", 13, 2,
    "F", "Carmen", "12", 14, 2,
    "F", "Nilong", "14", 15, 2,
    "F", "Omigen", "15", 16, 2,
    "F", "Flora", "18", 17, 2,
    "M", "Neon", "20", 18, 2,
    "M", "Sody", "22", 1, 3,
    "M", "Maythe", "24", 2, 3,
    "M", "Alumat", "26", 13, 3,
    "M", "Sam", "28", 14, 3,
    "M", "Philip", "30", 15, 3,
    "F", "Sufy", "32", 16, 3,
    "F", "Cam", "35", 17, 3,
    "F", "Amy", "39", 18, 3,
    "F", "Polin", "39", 1, 4,
    "F", "Cal", "40", 2, 4,
    "F", "Samant", "44", 3, 4,
    "F", "Titi", "47", 4, 4,
    "F", "Vanes", "50", 5, 4,
    "F", "Chrony", "51", 6, 4,
    "M", "Magni", "54", 7, 4,
    "M", "Iron", "55", 8, 4,
    "M", "Cobe", "58", 9, 4,
    "F", "Nicole", "58", 10, 4,
    "M", "Copper", "63", 11, 4,
    "M", "Zinc", "65", 12, 4,
    "F", "Galion", "69", 13, 4,
    "M", "Germai", "63", 14, 4,
    "M", "Artit", "74", 15, 4,
    "F", "Selena", "78", 16, 4,
    "M", "Browne", "79", 17, 4,
    "M", "Krypto", "83", 18, 4,
    "M", "Rubidi", "46", 1, 5,
    "F", "Samy", "62", 2, 5,
    "F", "Yen", "88", 3, 5,
    "F", "Zirna", "22", 4, 5,
    "F", "Naobe", "28", 5, 5,
    "M", "Molyma", "95", 6, 5,
    "M", "Techfa", "98", 7, 5,
    "F", "Ruth", "11", 8, 5,
    "M", "Randy", "12", 9, 5,
    "M", "Paul", "16", 10, 5,
    "M", "Silva", "17", 11, 5,
    "M", "Carb", "41", 12, 5,
    "M", "Iedien", "14", 13, 5,
    "M", "Tin", "18", 14, 5,
    "M", "Antony", "21", 15, 5,
    "F", "Telly", "27", 16, 5,
    "F", "Iodine", "26", 17, 5,
    "F", "Xenony", "31", 18, 5,
    "F", "Caesy", "32", 1, 6,
    "F", "Bary", "32", 2, 6,
    "M", "Lantan", "38", 4, 9,
    "M", "Cerium", "40", 5, 9,
    "M", "Praseo", "40", 6, 9,
    "M", "Neody", "44", 7, 9,
    "M", "Promet", "15", 8, 9,
    "M", "Sama", "36", 9, 9,
    "F", "Europi", "51", 10, 9,
    "F", "Gadol", "25", 11, 9,
    "F", "Terbi", "35", 12, 9,
    "F", "Dyspro", "62", 13, 9,
    "F", "Holmy", "32", 14, 9,
    "M", "Erbi", "25", 15, 9,
    "M", "Thuli", "68", 16, 9,
    "F", "Yytter", "73", 17, 9,
    "F", "Luteni", "74", 18, 9,
    "F", "Hafni", "78", 4, 6,
    "F", "Tantal", "18", 5, 6,
    "F", "Tungst", "18", 6, 6,
    "F", "Rheniu", "18", 7, 6,
    "M", "Osman", "23", 8, 6,
    "M", "Ivan", "21", 9, 6,
    "M", "Pluto", "84", 10, 6,
    "M", "Golden", "16", 11, 6,
    "M", "Mercy", "59", 12, 6,
    "F", "Tam", "38", 13, 6,
    "F", "Lenna", "27", 14, 6,
    "F", "Billy", "28", 15, 6,
    "F", "Poline", "29", 16, 6,
    "F", "Anne", "21", 17, 6,
    "M", "Radeon", "22", 18, 6,
    "M", "French", "23", 1, 7,
    "M", "Raymon", "26", 2, 7,
    "M", "Tian", "27", 4, 10,
    "M", "Teo", "32", 5, 10,
    "M", "Tan", "31", 6, 10,
    "M", "Urasia", "38", 7, 10,
    "M", "Nuptum", "37", 8, 10,
    "M", "Platan", "44", 9, 10,
    "M", "Alex", "43", 10, 10,
    "M", "Eric", "47", 11, 10,
    "M", "Berneh", "47", 12, 10,
    "F", "Carmen", "51", 13, 10,
    "M", "Einste", "52", 14, 10,
    "M", "Fermiu", "57", 15, 10,
    "F", "Mendel", "58", 16, 10,
    "M", "Nobeli", "59", 17, 10,
    "M", "Lawren", "26", 18, 10,
    "M", "Ruther", "26", 4, 7,
    "F", "Dubniu", "68", 5, 7,
    "F", "Seabor", "71", 6, 7,
    "M", "Bohriu", "27", 7, 7,
    "F", "Hassiu", "27", 8, 7,
    "F", "Meitne", "27", 9, 7,
    "F", "Darmst", "28", 10, 7,
    "F", "Roentg", "28", 11, 7,
    "F", "Copern", "28", 12, 7,
    "F", "Nihoni", "28", 13, 7,
    "F", "Flerov", "28", 14, 7,
    "F", "Moscov", "29", 15, 7,
    "F", "Liverm", "29", 16, 7,
    "F", "Tennes", "29", 17, 7,
    "F", "Oganes", "29", 18, 7
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: [], cone: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false); 

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');
    addClickListener(targets.cone, 'cone');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
    
    var item = table[ i ];
    let colorText;
					switch( item[0] ){
					case 'F':
						colorText = 'rgb(238, 130, 238,';
						break;
					case 'M':
						colorText = 'rgb(0, 0, 255,';
						break;
                    }
    //element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    element.style.backgroundColor = colorText + '0.4)';

    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();
    let coneVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
        addConeObject(coneVector, i, l);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addConeObject(coneVector, index, length){

const phi = index * 0.175 + Math.PI;
let object = new THREE.Object3D();

object.position.set
object.position.x = (Math.sqrt(index * 500)+1000*Math.abs(index-length/2)/length+500) * Math.sin( phi );
object.position.y = - ( index * 15 ) + 750;
object.position.z = (Math.sqrt(index * 500)+1000*Math.abs(index-length/2)/length+500) * Math.cos( phi );

coneVector.copy( targets.simple[length/2].position );
coneVector.x *= 2;
coneVector.z *= 2;

object.lookAt( new THREE.Vector3(0,0,0) );

targets.cone.push( object );
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
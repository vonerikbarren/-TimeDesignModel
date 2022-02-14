import * as THREE from './libraries/modules/three.module.js';

			import Stats from './libraries/modules/stats.module.js';

			import { GUI } from './libraries/config/lil-gui.module.min.js';
			import { OrbitControls } from './libraries/controllers/OrbitControls.js';
			import { FirstPersonControls } from './libraries/controllers/FirstPersonControls.js';
			import { Water } from './assets/objects/Water.js';
			import { Sky } from './assets/objects/Sky.js';
			import { GLTFLoader } from './libraries/loaders/GLTFLoader.js';
			import { DRACOLoader } from './libraries/loaders/DRACOLoader.js'
			const clock = new THREE.Clock();

			let container, stats;
			let camera, scene, renderer;
			let controls, water, sun, mesh, ΔΦ, ΔΩ;
			let Φ, MeshHDC_01, meshA1, goldenGearTest, goldenGearTest2 ;
			let neoncircle;
			let timeSphere, mesh_timeSphere_L0, mesh_Reality_A0, mesh_lightContainer_A0;

			const particlesGeometryA = new THREE.BufferGeometry()

			const dracoLoader = new DRACOLoader()
			dracoLoader.setDecoderPath('/draco/')

			const gltfLoader = new GLTFLoader()
			gltfLoader.setDRACOLoader(dracoLoader);

			let mixer = null
			
			gltfLoader.load('./assets/models/PanelTest.glb', (gltf) => {
				 scene.add(gltf.scene)
				
				})


			const textureLoader = new THREE.TextureLoader();
			// const testImg01 = textureLoader.load('./assets/img/Purple_Tech01.jpeg')
			const testImg01 = textureLoader.load('./assets/img/backgrounds/Glitter_Pixels.jpeg')

			const testImg02 = textureLoader.load('./assets/img/backgrounds/01_Purple_Galaxy.jpeg')

			const clockPNG = textureLoader.load('./assets/img/clocks/Clock03_A1.png')

			const gear01_png = textureLoader.load('./assets/img/gears/GoldenGear01_A1.png')


			// const neoncircle01 = textureLoader.load('./assets/img/gears/neoncircle.png')

			// Test ui_Folder_01
			const neoncircle01 = textureLoader.load('./assets/img/backgrounds/InfiniteContainer.jpg')
			
			// TimeSphereImgs
			const timeSphereImg_01 = textureLoader.load('./assets/img/backgrounds/hexagon02.jpg')

      const realitySphereImg_01 = textureLoader.load('./assets/img/backgrounds/greyWhiteGradient_02.jpeg')
		

			init();
			animate();

			function init() {

				container = document.getElementById( 'container' );

				//

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				container.appendChild( renderer.domElement );
				

				//

				scene = new THREE.Scene();

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 200000 );
				camera.position.set( 30, 100, 100 );
				camera.view = sun;

				//

				sun = new THREE.Vector3();

				// Water

				const waterGeometry = new THREE.PlaneGeometry( 500000, 500000 );

				water = new Water(
					waterGeometry,
					{
						textureWidth: 512,
						textureHeight: 512,
						waterNormals: new THREE.TextureLoader().load( './assets/textures/waternormals.jpg', function ( texture ) {

							texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

						} ),
						sunDirection: new THREE.Vector3(),
						sunColor: 0xffffff,
						waterColor: 0x001e0f,
						distortionScale: 3.7,
						fog: scene.fog !== undefined
					}
				);

				water.rotation.x = - Math.PI / 2;

				scene.add( water );

				// Skybox

				const sky = new Sky();
				sky.scale.setScalar( 50000 );
				scene.add( sky );

				const skyUniforms = sky.material.uniforms;

				skyUniforms[ 'turbidity' ].value = 10;
				skyUniforms[ 'rayleigh' ].value = 2;
				skyUniforms[ 'mieCoefficient' ].value = 0.005;
				skyUniforms[ 'mieDirectionalG' ].value = 0.8;

				const parameters = {
					elevation: 2,
					azimuth: 180
				};

				sky.rotation.x =  Math.PI / 2;

				const pmremGenerator = new THREE.PMREMGenerator( renderer );

				function updateSun() {

					const phi = THREE.MathUtils.degToRad( 90 - parameters.elevation );
					const theta = THREE.MathUtils.degToRad( parameters.azimuth );

					sun.setFromSphericalCoords( 1, phi, theta );

					sky.material.uniforms[ 'sunPosition' ].value.copy( sun );
					water.material.uniforms[ 'sunDirection' ].value.copy( sun ).normalize();

					scene.environment = pmremGenerator.fromScene( sky ).texture;

				}

				updateSun();

				// Toc_Geometries

				const geometry = new THREE.BoxGeometry( 30, 30, 30 );
				const material = new THREE.MeshStandardMaterial( { roughness: 0 } );

				mesh = new THREE.Mesh( geometry, material );
				scene.add( mesh );

				const ΔΦ01_OA1 = new THREE.ConeGeometry(30, 30, 3);
				ΔΦ = new THREE.Mesh(ΔΦ01_OA1, material );
				ΔΦ.position.x = 0
				ΔΦ.position.y = 75
				scene.add ( ΔΦ );

				const ΔΦ01_0Α2 = new THREE.ConeGeometry(30, 30, 3);
				const ΔΦ01_1Α2 = new THREE.MeshStandardMaterial({side: THREE.DoubleSide});
				ΔΩ = new THREE.Mesh(ΔΦ01_0Α2, material);
				ΔΩ.position.x = 0
				ΔΩ.position.y = 40
				ΔΩ.rotation.z = 3.14
				scene.add ( ΔΩ );



				const ΔΦ02_Α1 = new THREE.IcosahedronGeometry(7, 2);
				Φ = new THREE.Mesh(ΔΦ02_Α1, ΔΦ01_1Α2);
				Φ.position.y = 57.423
				scene.add ( Φ )

				const geometry2 = new THREE.SphereGeometry(5000, 32, 32)
				const material2 = new THREE.MeshBasicMaterial({ map: testImg02, side: THREE.DoubleSide });
				meshA1 = new THREE.Mesh(geometry2, material2)
				material2.transparent = false;
				material2.alphaMap = testImg02
				material2.wireframe = false;
        meshA1.position.set(0, 120000, 0)
				scene.add(meshA1)


				const geometry4 = new THREE.BoxGeometry(500, 500, 500, 32, 32, 32)
				const material4 = new THREE.MeshBasicMaterial({ map: testImg01, side: THREE.DoubleSide });
				const mesh3 = new THREE.Mesh(geometry4, material4)
				material4.transparent = true;
				material4.alphaMap = testImg01
				material4.wireframe = false;
				mesh3.position.set(0, 2000, 0)
				scene.add(mesh3)

				const geometry_neon01 = new THREE.BoxGeometry(1000, 1000, 1000, 32, 32, 32)
				const mat_neoncircle = new THREE.MeshBasicMaterial({ map: neoncircle01, side: THREE.DoubleSide });
				const mesh_neoncircle = new THREE.Mesh(geometry_neon01, mat_neoncircle);
				mat_neoncircle.transparent = false;
				mat_neoncircle.alphaMap = neoncircle01;
				mesh_neoncircle.position.set(0, 90000, 0);
				scene.add(mesh_neoncircle);
				3.7 


				const geometry04_HyperDataCardTest = new THREE.PlaneGeometry(400, 400);
				const mat_clock = new THREE.MeshBasicMaterial({map: clockPNG, side: THREE.DoubleSide});
				MeshHDC_01 = new THREE.Mesh(geometry04_HyperDataCardTest, mat_clock);
				mat_clock.transparent = true;
				MeshHDC_01.position.set(0, 55, 0);
				scene.add(MeshHDC_01);

				const geometry04_GoldenGear01 = new THREE.PlaneGeometry(300, 300);
				const mat_goldengear01 = new THREE.MeshBasicMaterial(
    			{
        		map: gear01_png,
        		side: THREE.DoubleSide
    			}
				);
				goldenGearTest = new THREE.Mesh(
    		geometry04_GoldenGear01,
    	 	mat_goldengear01
				);
				mat_goldengear01.transparent = true;
				goldenGearTest.position.set(0, 55, -1);
				scene.add(goldenGearTest);

				const geometry05_NeonCircle = new THREE.PlaneGeometry(500, 500);
				const mat_goldengear02 = new THREE.MeshBasicMaterial(
    			{
        		map: gear01_png,
        		side: THREE.DoubleSide
    			}
				);
				goldenGearTest2 = new THREE.Mesh(
    		geometry05_NeonCircle,
				mat_goldengear02,
				);
				mat_goldengear02.transparent = true;
				goldenGearTest2.position.set(0, 55, -2);
				scene.add(goldenGearTest2);





				// Groups	
				const group01_timeSphere = new THREE.Group();
				group01_timeSphere.position.set(500, 0, 0);
				scene.add(group01_timeSphere);

        const group02_RealityContainer = new THREE.Group();
        group02_RealityContainer.position.set(0, 0, 0);
        scene.add(group02_RealityContainer)

				// TimeSphere_Layer01_Skeleton
				const geo_timeSphere_L0 = new THREE.SphereGeometry( 4500, 32, 32)
				const mat_timeSphere_L0 = new THREE.MeshBasicMaterial({ map: timeSphereImg_01, side: THREE.DoubleSide });
				mesh_timeSphere_L0 = new THREE.Mesh(geo_timeSphere_L0, mat_timeSphere_L0)
				mat_timeSphere_L0.transparent =false;
				mat_timeSphere_L0.alphaMap = timeSphereImg_01
				mat_timeSphere_L0.wireframe = false;
				mesh_timeSphere_L0.position.set(0, 0, 200)
				group01_timeSphere.add(mesh_timeSphere_L0);

        const geo_Reality_A0 = new THREE.ConeGeometry(90000, 150000, 4)
        const mat_Reality_A0 = new THREE.MeshBasicMaterial({ 
          color: 0xffffff, 
          map: realitySphereImg_01, 
          side: THREE.DoubleSide 
        });
        mesh_Reality_A0 = new THREE.Mesh(geo_Reality_A0, mat_Reality_A0)
        mat_Reality_A0.transparent = false;
        mat_Reality_A0.alphaMap = realitySphereImg_01
        mat_Reality_A0.wireframe = false;
        mesh_Reality_A0.position.set(0, 74550, 0)
        group02_RealityContainer.add(mesh_Reality_A0)

        const geo_lightContainer_A0 = new THREE.CylinderGeometry(50, 50, 200000, 32);
        const mat_lightContainer_A0 = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
        mesh_lightContainer_A0 = new THREE.Mesh(geo_lightContainer_A0, mat_lightContainer_A0);
        mat_lightContainer_A0.transparent = true;
        mesh_lightContainer_A0.position.set(0, 100000, 0);
        group02_RealityContainer.add(mesh_lightContainer_A0);



        // -------------------------------------------------------------
				// const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
				// scene.add(ambientLight)

				const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3)
				scene.add(directionalLight)

				directionalLight.position.x = 255
				directionalLight.shadow.mapSize.width = 1024
				directionalLight.shadow.mapSize.height = 1024
				directionalLight.shadow.camera.near = 1
				directionalLight.shadow.camera.far = 6
				directionalLight.shadow.camera.top = 2
				directionalLight.shadow.camera.right = 2
				directionalLight.shadow.camera.bottom = - 2
				directionalLight.shadow.camera.left = - 2

				directionalLight.position.set(2, 2, - 1)
				scene.add(directionalLight)


				// controls = new OrbitControls( camera, renderer.domElement );
				// controls.maxPolarAngle = Math.PI * 0.495;
				// // controls.target.set( 0, 55, 0 );
				// // controls.minDistance = 40.0;
				// // controls.maxDistance = 200.0;
				// controls.update();


				controls = new FirstPersonControls( camera, renderer.domElement );

				controls.movementSpeed = 5000;
				controls.lookSpeed = 0.09
				controls.noFly = false;
				controls.lookVertical = true;
				controls.mouseDragOn = true;
				// controls.update();

				//
				camera.lookAt(0, 55, 0 )

				stats = new Stats();
				container.appendChild( stats.dom );

				// Toc.GUI

				const gui = new GUI();

				const folderSky = gui.addFolder( 'Sky' );
				folderSky.add( parameters, 'elevation', 0, 90, 0.1 ).onChange( updateSun );
				folderSky.add( parameters, 'azimuth', - 180, 180, 0.1 ).onChange( updateSun );
				folderSky.open();

				const waterUniforms = water.material.uniforms;

				const folderWater = gui.addFolder( 'Water' );
				folderWater.add( waterUniforms.distortionScale, 'value', 0, 8, 0.1 ).name( 'distortionScale' );
				folderWater.add( waterUniforms.size, 'value', 0.1, 10, 0.1 ).name( 'size' );
				folderWater.open();

				const folderPositions = gui.addFolder( 'Positions' )
				folderPositions.add(Φ.position, 'x').min(-200).max(200).step(0.001).name('x-position');
				folderPositions.add(Φ.position, 'y').min(-200).max(200).step(0.001).name('y-position');
				folderPositions.add(Φ.position, 'z').min(-200).max(200).step(0.001).name('z-position');
				
				const folderTransformations = gui.addFolder( 'Transformations');
				folderTransformations.add(ΔΩ.rotation, 'x').min(-3.14).max(3.14).step(0.001).name('x-rotation');
				folderTransformations.add(ΔΩ.rotation, 'y').min(-3.14).max(3.14).step(0.001).name('y-rotation');
				folderTransformations.add(ΔΩ.rotation, 'z').min(-3.14).max(3.14).step(0.001).name('z-rotation');
				
				const folderCamera = gui.addFolder('Camera');
				folderCamera.add(camera.position, 'x').min(-50000).max(50000).step(0.001).name('x-camera')
				folderCamera.add(camera.position, 'y').min(-50000).max(50000).step(0.001).name('y-camera')
				folderCamera.add(camera.position, 'z').min(-50000).max(50000).step(0.001).name('z-camera')



				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				camera.lookAt()

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );
				render();
				stats.update();

			}

			function render() {

				const time = performance.now() * 0.001;
				const delta = clock.getDelta();
				controls.update( delta );
			
				
				// mesh.position.z = Math.PI / 3 ;
				// mesh.rotation.z = Math.PI / 4 ;
        // mesh.position.y = 35;
				// mesh.position.x = 300;
        // mesh.scale.x = 0.5;

				// mesh.position.y = Math.sin( time ) * 20 + 5;

				// mesh.position.y = 30

				// mesh.rotation.z = 260
				// mesh.rotation.y = 80
				// mesh.rotation.x = time * 0.00001;
				// mesh.rotation.y = time * 1;
				// mesh.rotation.z = time * 0;

				// mesh.rotation.y = time * 0.1;
				// mesh2.rotation.y = time * 0.1;

				// camera.rotation.x = time * 0.1;
				// mesh.position.x = Math.cos(time * 2) * 212.5
				// mesh.position.z = Math.sin(time * 2) * 212.5
				// mesh.position.y = Math.sin(time * 2) * 112.5

				// ΔΦ.rotation.y = time * 15;
				// ΔΩ.rotation.y = time * 15;
				// // meshA1.rotation.y = time * 15;
				meshA1.rotation.x = time * 15
				// MeshHDC_01.rotation.z = time * -0.5;
				// goldenGearTest.rotation.z = time * 0.5;
				// goldenGearTest2.rotation.z = time * 0.5;

        mesh_timeSphere_L0.rotation.z = time * 15;
        mesh_timeSphere_L0.position.x = Math.cos(time * 2) * 2012.5
				mesh_timeSphere_L0.position.z = Math.sin(time * 0.5) * 2012.5
        mesh_timeSphere_L0.position.y = Math.sin(time * 0.1) * 10012.5

				// setTimeout(() => {
        // camera.position.x = Math.cos(time * 0.1) * 1200.5
        // camera.position.z = Math.sin(time * 0.1) * 1200.5
        // camera.lookAt(110, -10, -500)
    		// }, 10000)

				setTimeout(() => {
					setTimeout(() => {
						camera.position.set(2000, 3000, 7000)
        		camera.position.x = Math.cos(time * 0.1) * 1200.5
        		camera.position.z = Math.sin(time * 0.1) * 1200.5
        		camera.lookAt(110, -10, -500)
					}, 10000) 

					setTimeout(() => {
						camera.position.set(20000, 30000, 70000)
        		camera.position.x = Math.cos(time * 0.1) * 1200.5
        		camera.position.z = Math.sin(time * 0.1) * 1200.5
        		camera.lookAt(110, -10, -500)
					}, 50000) 

    		}, 5000)

				water.material.uniforms[ 'time' ].value += 1.0 / 60.0;

				renderer.render( scene, camera );

	}
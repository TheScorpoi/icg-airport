window.onload = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(500, 200, 100);
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xcce0ff, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
  
    document.body.appendChild(renderer.domElement);
  
    //GET ORBIT CONTROLS FILE FROM https://gist.github.com/jonathanlurie/bcedf6153a33ec64ab0f7c45e4e6fb70
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.123;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = true;
    controls.enableZoom = true;
    controls.minDistance = 654;
    controls.maxDistance = 845;
    controls.maxPolarAngle = Math.PI / 2;
  
    const house = new House(scene, camera);
  
    function animate() {
      requestAnimationFrame(animate);
      house.update();
      renderer.render(scene, camera);
    }
  
    animate();
  
    window.addEventListener("resize", onResize, false);
  
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  };
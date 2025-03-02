'use client'

// components/ThreeDScene.tsx
import { useEffect } from 'react';
import * as THREE from 'three';

const ThreeDScene: React.FC = () => {
  useEffect(() => {
    // Get the target div by ID
    const container = document.getElementById('threeDContainer');
    if (!container) return;

    // Create the Three.js scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight); // Set renderer size to match container
    container.appendChild(renderer.domElement); // Append renderer to the div

    // Create a cube (for demonstration)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Set initial camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    }

    animate();

    // Adjust the renderer size on window resize
    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Clean up when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement); // Remove the canvas when the component is unmounted
    };
  }, []);

  return <div id="threeDContainer" style={{ width: '100%', height: '500px' }} />;
};

export default ThreeDScene;

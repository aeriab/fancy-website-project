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

    const geometry = new THREE.BoxGeometry(2.5,2.5,2.5);
    const colors = [];

    const color1 = new THREE.Color(0x19ffb6); // Top color
    const color2 = new THREE.Color(0xffffff); // Bottom color

    // Assign colors to each vertex
    for (let i = 0; i < geometry.attributes.position.count; i++) {
      const y = geometry.attributes.position.getY(i);
      const lerpColor = color1.clone().lerp(color2, (y + 0.5) / 1.0); // Normalize Y
      colors.push(lerpColor.r, lerpColor.g, lerpColor.b);
    }

    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // Create a material that supports vertex colors
    const material = new THREE.MeshBasicMaterial({ vertexColors: true });

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

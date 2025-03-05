'use client'

// components/ThreeDScene.tsx

import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { rgbShift } from 'three/examples/jsm/tsl/display/RGBShiftNode.js';
import { deltaTime } from 'three/tsl';



export function createDots(numDots: number, boxSize: number, dotSize: number): THREE.Group {
  const group = new THREE.Group();
  const material = new THREE.MeshBasicMaterial({ color: 0x0e3c64 });

  for (let i = 0; i < numDots; i++) {
      const geometry = new THREE.SphereGeometry(dotSize * (Math.random() + 0.5), 16, 16)
      const dot = new THREE.Mesh(geometry, material);

      // Random position within the box
      dot.position.set(
          (Math.random() - 0.5) * boxSize,
          (Math.random() - 0.5) * boxSize,
          (Math.random() - 0.1) * boxSize * 0.5
      );

      group.add(dot);
  }
  return group;
}


const ThreeDScene: React.FC = () => {

  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    
    const BOX_SIZE = 10;

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

    const dots = createDots(800,BOX_SIZE * 2, 0.03);
    scene.add(dots);

    // Set initial camera position
    camera.position.z = 5;


    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);



    const clock = new THREE.Clock();
    let timeVal = 0.0;
    let movingRightVal = 0.0;
    let movingUpVal = 0.0;

    let previousXPos = mouseRef.current.x;
    let previousYPos = mouseRef.current.y;
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      timeVal = clock.getElapsedTime();
      
      dots.children.forEach((dot) => {
        dot.position.x += movingRightVal * 0.05;
        dot.position.y += movingUpVal * 0.05;

        if (dot.position.x > BOX_SIZE) {
          dot.position.x -= 2 * BOX_SIZE;
        } else if (dot.position.x < -BOX_SIZE) {
          dot.position.x += 2 * BOX_SIZE;
        }

        if (dot.position.y > BOX_SIZE) {
          dot.position.y -= 2 * BOX_SIZE;
        } else if (dot.position.y < -BOX_SIZE) {
          dot.position.y += 2 * BOX_SIZE;
        }
      });
      // dots.position.z = (Math.cos(0.05 * timeVal) * 1.3)

      movingRightVal += mouseRef.current.x - previousXPos;
      previousXPos = mouseRef.current.x;

      movingUpVal += mouseRef.current.y - previousYPos;
      previousYPos = mouseRef.current.y;


      renderer.render(scene, camera);

      // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD    BACK IN !!!!!!!!!!!

      // movingRightVal *= 0.95;
      // movingUpVal *= 0.95;

      if (movingRightVal > 0.06 || movingRightVal < -0.06) {
        movingRightVal *= 0.95;
      }
      if (movingUpVal > 0.06 || movingUpVal < -0.06) {
        movingUpVal *= 0.95;
      }

      // if (movingUpVal > 0.02) {
      //   movingUpVal = movingUpVal * (1.0 - Math.min(0.99,(5.0 * clock.getDelta())));
      // } else if (movingUpVal < -0.02) {
      //   movingUpVal = movingUpVal * (1.0 - Math.min(0.99,(5.0 * clock.getDelta())));
      // }

      console.log("movingUpVal: " + String(movingUpVal));
      
      // console.log("movingRightVal: " + String(movingRightVal));
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

  return <div id="threeDContainer" className='absolute top-0 left-0 w-full h-full' />;
};

export default ThreeDScene;

// src/components/EarthGlobe.js
import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const EarthGlobe = ({ onSelectEcosystem, ecosystems }) => {
  const earthRef = useRef();
  const earthTexture = useLoader(TextureLoader, '/textures/earth.jpg');

  earthTexture.wrapS = THREE.RepeatWrapping;
  earthTexture.wrapT = THREE.RepeatWrapping;

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  // Corrected coordinate calculation
  const latLongToVector3 = (latitude, longitude, radius) => {
    // Convert to radians
    const latRad = latitude * (Math.PI / 180);
    const lonRad = -longitude * (Math.PI / 180); // Negative for correct orientation
    
    return [
      radius * Math.cos(latRad) * Math.cos(lonRad),
      radius * Math.sin(latRad),
      radius * Math.cos(latRad) * Math.sin(lonRad)
    ];
  };

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          map={earthTexture}
          metalness={0.1}
          roughness={1}
        />

        {ecosystems.map((eco, index) => {
          const [x, y, z] = latLongToVector3(
            eco.coordinates[0], // latitude
            eco.coordinates[1], // longitude
            2.01              // slightly larger than Earth radius
          );

          return (
            <group key={index} position={[x, y, z]}>
              <mesh
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectEcosystem(eco);
                }}
                onPointerOver={() => {
                  document.body.style.cursor = 'pointer';
                }}
                onPointerOut={() => {
                  document.body.style.cursor = 'auto';
                }}
              >
                <sphereGeometry args={[0.04, 16, 16]} />
                <meshBasicMaterial 
                  color={eco.color}
                  transparent
                  opacity={0.8}
                />
              </mesh>
              
              {/* Glow effect */}
              <mesh>
                <sphereGeometry args={[0.06, 16, 16]} />
                <meshBasicMaterial
                  color={eco.color}
                  transparent
                  opacity={0.3}
                />
              </mesh>
            </group>
          );
        })}
      </mesh>

      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshBasicMaterial
          color="#1B4F72"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default EarthGlobe;
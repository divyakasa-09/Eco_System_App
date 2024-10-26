// src/components/EcosystemPoint.js
import React from 'react';
import { Html } from '@react-three/drei';

const EcosystemPoint = ({ position, color, onClick }) => {
  return (
    <group position={position}>
      <Html
        center
        style={{
          pointerEvents: 'auto'
        }}
        distanceFactor={8}
      >
        <div
          onClick={onClick}
          className="w-4 h-4 rounded-full cursor-pointer transform hover:scale-150 transition-transform"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`,
            border: '2px solid white',
          }}
        />
      </Html>
    </group>
  );
};

export default EcosystemPoint;
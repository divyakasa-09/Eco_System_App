// src/components/Globe.js
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import EarthGlobe from './EarthGlobe';
import EcosystemCard from './EcosystemCard';
import { ecosystemData, ecosystemColors } from '../data/ecosystems';

const Globe = () => {
  const [selectedEcosystem, setSelectedEcosystem] = useState(null);

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#0B1026] to-[#262C44]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      {/* Header */}
      <div className="absolute top-0 left-0 m-8 z-10">
        <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">
          Earth's Ecosystems
        </h1>
        <p className="text-lg text-blue-200/80">
          Explore our planet's diverse environments
        </p>
      </div>

      {/* Legend */}
      <div className="absolute bottom-8 left-8 z-10 bg-white/10 backdrop-blur-md rounded-lg p-4">
        <div className="text-white text-sm space-y-2">
          {Object.entries(ecosystemColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="capitalize">{type.replace('-', ' ')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Globe Container */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="backdrop-blur-sm"
      >
        <color attach="background" args={['#040B1D']} />
        <Stars 
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight 
          position={[5, 3, 5]}
          intensity={1}
          castShadow
        />

        <EarthGlobe 
          onSelectEcosystem={setSelectedEcosystem}
          ecosystems={ecosystemData}
        />
        
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={10}
          rotateSpeed={0.5}
          zoomSpeed={0.5}
        />
      </Canvas>

      {/* Info Card - REPLACE THIS SECTION */}
      {selectedEcosystem && (
        <div className="absolute right-8 top-8 w-96 max-h-[90vh] z-10 transition-all duration-300 ease-in-out">
          <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-white/20">
            <EcosystemCard 
              ecosystem={selectedEcosystem}
              onClose={() => setSelectedEcosystem(null)}
            />
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-8 right-8 text-white/60 text-sm">
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
};

export default Globe;
// src/components/EcosystemCard.js
import React from 'react';

const EcosystemCard = ({ ecosystem, onClose }) => {
  if (!ecosystem) return null;

  return (
    <div className="text-white max-h-[90vh] flex flex-col">
      {/* Header */}
      <div className="relative h-48 flex-shrink-0">
        <img
          src={ecosystem.image}
          alt={ecosystem.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 
                     hover:bg-black/60 flex items-center justify-center 
                     transition-colors duration-200 text-white"
        >
          ✕
        </button>
        <h2 className="absolute bottom-4 left-4 text-2xl font-bold">
          {ecosystem.name}
        </h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-200 mb-2">
              Description
            </h3>
            <p className="text-white/80">{ecosystem.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-200 mb-2">
              Climate
            </h3>
            <p className="text-white/80">{ecosystem.climate}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-200 mb-2">
              Key Species
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {ecosystem.keySpecies.map((species, index) => (
                <div 
                  key={index}
                  className="text-white/80 flex items-center gap-2"
                >
                  • {species}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-blue-200 mb-2">
              Conservation Status
            </h3>
            <p className="text-white/80">{ecosystem.conservationStatus}</p>
          </div>

          {ecosystem.funFacts && (
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-2">
                Fun Facts
              </h3>
              <ul className="space-y-2">
                {ecosystem.funFacts.map((fact, index) => (
                  <li 
                    key={index}
                    className="text-white/80 flex items-center gap-2"
                  >
                    • {fact}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcosystemCard;
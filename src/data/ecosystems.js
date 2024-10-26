// data/ecosystems.js


export const ecosystemData = [
    {
      id: 'amazon-rainforest',
      name: 'Amazon Rainforest',
       coordinates: [-3.4653, -62.2159], // Brazil
      color: '#2ecc71',
      description: 'The Amazon rainforest is the world\'s largest tropical rainforest, covering over 5.5 million square kilometers. It\'s often referred to as the "Earth\'s lungs" because it produces about 20% of the world\'s oxygen.',
      climate: 'Hot and humid year-round with temperatures between 20-30°C, annual rainfall of 1500-3000mm.',
      keySpecies: [
        'Jaguar',
        'Poison Dart Frog',
        'Harpy Eagle',
        'Giant River Otter',
        'Brazil Nut Tree'
      ],
      conservationStatus: 'Critically endangered due to deforestation, with approximately 17% lost in the last 50 years',
      funFacts: [
        'Contains 1 in 10 known species on Earth',
        'Home to over 40,000 plant species',
        'Houses 2.5 million insect species'
      ],
      humanImpact: [
        'Deforestation for agriculture',
        'Mining activities',
        'Urban development',
        'Climate change effects'
      ],
      image: '/images/amazon.jpg'
    },
    {
      id: 'great-barrier-reef',
      name: 'Great Barrier Reef Marine Ecosystem',
      coordinates: [-18.2871, 147.6992], // Australia
      color: '#3498db',
      description: 'The world\'s largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching over 2,300 kilometers.',
      climate: 'Tropical marine climate with water temperatures between 22-29°C',
      keySpecies: [
        'Clownfish',
        'Green Sea Turtle',
        'Dugong',
        'Giant Clam',
        'Reef Manta Ray'
      ],
      conservationStatus: 'Critically endangered due to ocean acidification and warming waters',
      funFacts: [
        'Visible from space',
        'Contains over 1,500 species of fish',
        'Home to 400 different hard coral species'
      ],
      humanImpact: [
        'Ocean acidification',
        'Tourist activities',
        'Coastal development',
        'Water pollution'
      ],
      image: '/images/barrier-reef.jpg'
    },
    {
      id: 'sahara-desert',
      name: 'Sahara Desert',
      coordinates: [23.4162, 12.6628], // North Africa
      color: '#e67e22',
      description: 'The world\'s largest hot desert, covering an area of approximately 9.2 million square kilometers, comparable to the size of China.',
      climate: 'Extremely hot and dry, with daytime temperatures up to 47°C and nighttime temperatures below freezing',
      keySpecies: [
        'Fennec Fox',
        'Dromedary Camel',
        'Deathstalker Scorpion',
        'Desert Monitor Lizard',
        'Saharan Cheetah'
      ],
      conservationStatus: 'Threatened by climate change and desertification',
      funFacts: [
        'Experiences snow on rare occasions',
        'Was once a lush savanna 10,000 years ago',
        'Contains hidden underground aquifers'
      ],
      humanImpact: [
        'Desertification',
        'Resource extraction',
        'Tourism impact'
      ],
      image: '/images/sahara.jpg'
    },
    {
      id: 'arctic-tundra',
      name: 'Arctic Tundra',
      coordinates: [71.7069, -42.6043],// Greenland
      color: '#95a5a6',
      description: 'A treeless biome where low temperatures and short growing seasons restrict tree growth. The soil is permanently frozen (permafrost).',
      climate: 'Extremely cold with average winter temperatures -30°C to -50°C',
      keySpecies: [
        'Polar Bear',
        'Arctic Fox',
        'Caribou',
        'Snowy Owl',
        'Arctic Moss'
      ],
      conservationStatus: 'Highly threatened by global warming and permafrost thaw',
      funFacts: [
        'Soil remains frozen year-round',
        'Experiences months of complete darkness',
        'Contains vast stores of frozen carbon'
      ],
      humanImpact: [
        'Climate change effects',
        'Oil and gas exploration',
        'Infrastructure development'
      ],
      image: '/images/tundra.jpg'
    },
    {
      id: 'congo-basin',
      name: 'Congo Rainforest',
      coordinates: [-0.7893, 23.6566],// Central Africa
      color: '#27ae60',
      description: 'The world\'s second-largest rainforest, known for its exceptional biodiversity and unique species.',
      climate: 'Tropical with year-round rainfall and temperatures between 20-30°C',
      keySpecies: [
        'Mountain Gorilla',
        'Forest Elephant',
        'Okapi',
        'Bonobo',
        'African Grey Parrot'
      ],
      conservationStatus: 'Endangered due to logging and mining activities',
      funFacts: [
        'Home to over 10,000 plant species',
        'Contains 400 mammal species',
        'Houses over 1,000 bird species'
      ],
      humanImpact: [
        'Illegal logging',
        'Mining operations',
        'Poaching',
        'Agricultural expansion'
      ],
      image: '/images/congo.jpg'
    },
    {
      id: 'great-plains',
      name: 'Great Plains Grasslands',
      coordinates: [-0.7893, 23.6566],// USA
      color: '#f1c40f',
      description: 'Vast grasslands stretching across central North America, characterized by prairie ecosystems and rich soil.',
      climate: 'Semi-arid to humid with hot summers and cold winters, annual rainfall 250-750mm',
      keySpecies: [
        'American Bison',
        'Prairie Dog',
        'Pronghorn Antelope',
        'Ferruginous Hawk',
        'Buffalo Grass'
      ],
      conservationStatus: 'Endangered due to agricultural conversion',
      funFacts: [
        'Once home to millions of bison',
        'Contains some of the world\'s most fertile soil',
        'Experiences extreme weather patterns'
      ],
      humanImpact: [
        'Agricultural conversion',
        'Urban development',
        'Water management issues'
      ],
      image: '/images/plains.jpg'
    },
    {
      id: 'himalayan-mountains',
      name: 'Himalayan Mountain Ecosystem',
      coordinates: [27.9881, 86.9250], // Nepal
      color: '#8e44ad',
      description: 'The world\'s highest mountain ecosystem, featuring diverse altitude-based zones and unique adaptations.',
      climate: 'Varies by altitude, from temperate to permanent snow and ice',
      keySpecies: [
        'Snow Leopard',
        'Red Panda',
        'Himalayan Tahr',
        'Musk Deer',
        'Rhododendron'
      ],
      conservationStatus: 'Threatened by climate change and tourism impact',
      funFacts: [
        'Contains the world\'s highest peak',
        'Features over 10,000 plant species',
        'Home to unique high-altitude adaptations'
      ],
      humanImpact: [
        'Tourism pressure',
        'Climate change effects',
        'Infrastructure development'
      ],
      image: '/images/himalayas.jpg'
    }
  ];
  
  // Helper function to convert lat/long to 3D coordinates
  export const latLongToVector3 = (lat, long, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (long + 180) * (Math.PI / 180);
    
    return {
      x: -radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.cos(phi),
      z: radius * Math.sin(phi) * Math.sin(theta)
    };
  };
  
  // Color schemes for different ecosystem types
  export const ecosystemColors = {
    rainforest: '#2ecc71',    // Green
    marine: '#3498db',        // Blue
    desert: '#e67e22',        // Orange
    tundra: '#95a5a6',        // Grey
    grassland: '#f1c40f',     // Yellow
    mountain: '#8e44ad',      // Purple
    mediterranean: '#16a085', // Turquoise
    taiga: '#2c3e50'         // Dark Blue
  };
  
  // Categories for filtering
  export const ecosystemCategories = [
    { id: 'all', name: 'All Ecosystems' },
    { id: 'rainforest', name: 'Rainforests' },
    { id: 'marine', name: 'Marine' },
    { id: 'desert', name: 'Deserts' },
    { id: 'tundra', name: 'Tundra' },
    { id: 'grassland', name: 'Grasslands' },
    { id: 'mountain', name: 'Mountains' }
  ];
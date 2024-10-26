# Earth's Ecosystems Explorer 🌍

An interactive 3D visualization of Earth's major ecosystems built with React, Three.js, and React Three Fiber. This application allows users to explore different ecosystems around the globe, learn about their characteristics, and understand their conservation status.

[Watch the Demo Video](./videos/demo.mp4)


## 🌟 Features

- Interactive 3D Earth globe with realistic texture
- Real-time rotation and smooth camera controls
- Clickable ecosystem points with visual indicators
- Detailed information cards for each ecosystem
- Responsive design with proper scaling
- Starry space background
- Color-coded ecosystem categories
- Smooth transitions and animations

## 🛠️ Technologies Used

- React.js
- Three.js
- React Three Fiber (@react-three/fiber)
- React Three Drei (@react-three/drei)
- TailwindCSS
- JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/earth-ecosystems-explorer.git
cd earth-ecosystems-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.


## 🌍 Featured Ecosystems

- Amazon Rainforest
- Great Barrier Reef
- Sahara Desert
- Arctic Tundra
- Congo Basin
- Great Plains Grasslands
- Himalayan Mountains
- And more...

## 🎮 Usage

- **Rotate Globe**: Click and drag to rotate the Earth
- **Zoom**: Use scroll wheel to zoom in/out
- **View Ecosystem**: Click on colored points to view ecosystem information
- **Close Info**: Click the 'X' button to close ecosystem information
- **Legend**: View ecosystem types in the bottom-left corner

## 🔧 Configuration

### Adding New Ecosystems

Add new ecosystems in `src/data/ecosystems.js`:

```javascript
export const ecosystemData = [
  {
    id: 'unique-id',
    name: 'Ecosystem Name',
    coordinates: [latitude, longitude],
    color: '#hexcolor',
    description: 'Description...',
    climate: 'Climate details...',
    keySpecies: ['Species 1', 'Species 2'],
    conservationStatus: 'Status...',
    funFacts: ['Fact 1', 'Fact 2'],
    image: '/images/ecosystem.jpg'
  }
  // ...
];
```

### Customizing Appearance

Modify the globe appearance in `src/components/EarthGlobe.js`:

```javascript
const EarthGlobe = {
  radius: 2,
  segments: 64,
  rotation: 0.001,
  // ...
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Earth texture map from NASA's Visible Earth project
- Three.js community for excellent documentation
- React Three Fiber team for the amazing library
- Contributors and maintainers of all dependencies

## 🐛 Known Issues

- Some ecosystems might not appear in exact geographical locations
- Performance might vary on different devices

## 🔮 Future Enhancements

- Add more ecosystems and detailed information
- Implement time-based day/night cycle
- Add atmospheric effects
- Include more interactive elements
- Add ecosystem connections and relationships
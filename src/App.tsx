import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import ScrollVelocity from './components/ScrollVelocity';
import FlowingMenu from './components/FlowingMenu';

const demoItems = [
  { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

function App() {
  return (
    <>
      <Navbar />
      <Landingpage />
      <ScrollVelocity
        texts={['DESIGNING THE FUTURE -']}
        velocity={200}
        className="custom-scroll-text"
      />
      
      {/* Add FlowingMenu section */}
      <div style={{ 
        height: '600px', 
        position: 'relative',
        margin: '80px 0',
        background: '#070707' 
      }}>
        <FlowingMenu items={demoItems} />
      </div>
    </>
  );
}

export default App;
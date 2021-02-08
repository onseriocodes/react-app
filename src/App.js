import React from 'react';
import Main from './components/Main';
import Particles from 'react-particles-js';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#7fffd4'
              }
            }
          }
        }}
      />
      <Main />
      <Footer />
    </>
  );
};

export default App;

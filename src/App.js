import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
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
                color: '#dc143c'
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

import React, { useEffect, useState } from 'react';
import './App.css';
import Layer from './components/hoc/layer/layer';

function App() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onAppScroll);
    return (() => window.removeEventListener('scroll', onAppScroll));
  }, [])

  const onAppScroll = (event) => {
    setScrollY(window.scrollY);
  }

  return (
    <div className="App">

      <Layer className="layer layer1" layerIndex={1} scrollPos={scrollY}>

      </Layer>

      <Layer className="layer layer2" layerIndex={2} scrollPos={scrollY}>
        <br></br>
        <br></br>
        <p>☀️</p>
      </Layer>

      <Layer className="layer layer3" layerIndex={10} scrollPos={scrollY}>
        <p>PARALLAX</p>
      </Layer>
    </div>
  );
}

export default App;

import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import Layer from './components/hoc/layer/Layer';

function App() {

  const ref1= useRef(null);

  const [scrollY, setScrollY] = useState(0);
  const [refTop, setRefTop] =useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onAppScroll);
    return (() => window.removeEventListener('scroll', onAppScroll));
  }, [])

  useEffect(() => {
    const bbox = ref1.current.getBoundingClientRect();
    setRefTop(bbox.top);
  },[scrollY])

  const onAppScroll = (event) => {
    setScrollY(window.scrollY);
  }

  return (
    <div className="App">
      <Layer refname={ref1} className="layer" layerIndex={1} style={{top: refTop * scrollY/5000, fontSize:"2rem", filter:"blur(1px)"}} >
        <p>Hello</p>
      </Layer>

      <Layer className="layer" layerIndex={2} style={{top: refTop * scrollY/2000, fontSize: "3rem"}} >
        <p>World</p>
      </Layer>
    </div>
  );
}

export default App;

import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Loader } from "@react-three/drei";
import gsap from "gsap";
import { House } from "./House";
import { Trump } from "./Trump";
import './App.css';

function App() {
  const cameraRef = useRef();

  const moveCamera = () => {
    gsap.to(cameraRef.current.position, {
      x: 3,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="App">
      <Canvas
        className="canvas-container"
        onCreated={(state) => {
          cameraRef.current = state.camera;
          state.camera.position.set(0, 10, 30);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={8} />
          <pointLight intensity={2} position={[-1, 2, -2]} />
          <OrbitControls />
          <Environment files="./me.hdr" background />
          <House position={[0, 0, 0]} />
          <Trump scale={0.5} position={[0, -1, -2]} rotation={[0, 1.6, 0]} />
        </Suspense>
      </Canvas>
      <Loader />
      <button className="bottom-button" onClick={moveCamera}>
        Join Us
      </button>
    </div>
  );
}

export default App;
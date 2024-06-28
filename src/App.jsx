import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Sushi } from "./Sushi";
import { House } from "./House";
import gsap from "gsap";
import { Trump } from "./Trump";

function App() {
  const [count, setCount] = useState(0);
  const cameraRef = useRef();

  // Function to handle button click and animate the camera
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
        onCreated={(state) => {
          cameraRef.current = state.camera;
          state.camera.position.z = 30;
          state.camera.position.x = 0;
          state.camera.position.y = 10;
        }}
      >
        <ambientLight intensity={8} />
        <pointLight intensity={2} position={[-1, 2, -2]} />
        <OrbitControls />
        {/* <Sushi position={[0,-5,0]}/> */}
        <Environment files="./bl.exr" background />
        <House position={[0, 0, 0]} />
        <Trump scale={.5} position={[0,-1,-2]} rotation={[0,1.6,0]}/>
      </Canvas>
      <button className="bottom-button" onClick={moveCamera}>
        Join Us
      </button>
    </div>
  );
}

export default App;

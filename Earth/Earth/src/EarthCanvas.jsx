import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


const EarthCanvas = () => {
  // Load the 3D model using the useGLTF hook
  const { scene } = useGLTF('/planet/earth_and_clouds_gltf.gltf');


  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
    >
      {/* OrbitControls to allow rotation */}
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      {/* Add the loaded 3D model */}
      <primitive object={scene} scale={2.5} />
    </Canvas>
  );
};

export default EarthCanvas;

import {MeshReflectorMaterial} from '@react-three/drei';

export default function ChamberFloor() {
  return (
    <mesh receiveShadow castShadow position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[150, 150]}/>
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={10}
        depthScale={1}
        minDepthThreshold={0.85}
        color='#151515'
        metalness={0.6}
        roughness={1}
        mirror={0}
      />
    </mesh>
  );
}

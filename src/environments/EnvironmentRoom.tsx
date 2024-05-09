import {useTexture} from '@react-three/drei';
import {BackSide, Euler, Mesh} from 'three';
import {useFrame} from '@react-three/fiber';
import {useEffect, useRef} from 'react';

export default function EnvironmentRoom() {
  const ref = useRef<Mesh>(null!);
  const map = useTexture('./images/test-orange.jpg');

  // useEffect(() => {
  //   ref.current.rotation.y = 0.8;
  // }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.006;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={0.8}>
      <sphereGeometry args={[476, 20, 20]}/>
      <meshBasicMaterial
        map={map}
        side={BackSide}
        // opacity={0.8}
        transparent
        // depthTest={true}
        // depthWrite={true}
        // transparent={true}
        // polygonOffset={false}
        // polygonOffsetFactor={-10}
        // toneMapped={true}
      />
    </mesh>
  );
}

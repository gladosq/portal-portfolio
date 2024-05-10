import {useTexture} from '@react-three/drei';
import {BackSide, Mesh} from 'three';
import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';

export default function EnvironmentRoom() {
  const ref = useRef<Mesh>(null!);
  const map = useTexture('./images/room-bg-dark.jpg');

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereGeometry args={[476, 120, 120]}/>
      <meshBasicMaterial
        map={map}
        side={BackSide}
      />
    </mesh>
  );
}

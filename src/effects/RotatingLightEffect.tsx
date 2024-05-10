import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';
import {Group} from 'three';

export default function RotatingLightEffect() {
  const ref = useRef<Group>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <group ref={ref}>

      <directionalLight
        position={[50, -4, -10]}
        castShadow
        intensity={5}
        shadow-mapSize={4048}
        shadow-bias={-0.02}
        color={'#03F0FF'}
      />
    </group>
  );
}

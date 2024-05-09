import {useFrame} from '@react-three/fiber';
import {useRef} from 'react';

export default function LightEffect() {
  const ref = useRef(null!);

  useFrame((state, delta) => {
    ref.current.rotation.y += 0.006;
  });

  return (
    <group ref={ref}>
      <directionalLight
        position={[20, 10, -15]}
        // position={[20, 10, -15]}
        castShadow
        intensity={4}
        shadow-mapSize={2048}
        shadow-bias={-0.02}
        color={'#BE580F'}
      />
    </group>
  );
}

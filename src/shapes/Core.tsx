import {useGLTF} from '@react-three/drei';
import {getRandomNumber} from '../utils/math.ts';
import {useMemo} from 'react';

type CoreProps = {
  onClick?: () => void;
}

export default function Core({onClick}: CoreProps) {
  const {nodes, materials} = useGLTF('/models/core.glb');

  const randomXVariable = useMemo(() => getRandomNumber(-1, 0), []);
  const randomYVariable = useMemo(() => getRandomNumber(0, 4), []);
  const randomZVariable = useMemo(() => getRandomNumber(-2, 1), []);

  return (
    <group
      scale={0.05}
      onClick={onClick}
      position={[randomXVariable, randomYVariable, randomZVariable]}
    >
      <mesh
        position={[0, 0, 0]}
        castShadow
        receiveShadow
        geometry={(nodes as any).Object_130.geometry}
        material={materials['personality_sphere']}
      />
      <mesh
        position={[0.07, -0.1, 0.01]}
        castShadow
        receiveShadow
        geometry={(nodes as any).Object_133.geometry}
        material={materials['personality_sphere_light']}
      />
    </group>
  );
}

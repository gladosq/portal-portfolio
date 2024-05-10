import {useGLTF} from '@react-three/drei';

type CoreProps = {
  onClick?: () => void;
}

export default function Core({onClick}: CoreProps) {
  const {nodes, materials} = useGLTF('/models/core.glb');

  return (
    <group
      scale={0.05}
      onClick={onClick}
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

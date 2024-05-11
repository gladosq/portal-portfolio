import {useGLTF} from '@react-three/drei';

type SpawnButtonProps = {
  onClick: () => void;
  isClickedButton?: boolean;
}

export default function SpawnButton({onClick, isClickedButton}: SpawnButtonProps) {
  const {nodes, materials} = useGLTF('/models/button.glb');

  return (
    <group
      position={[1, -1.39, 15]}
      scale={0.05}
      onClick={onClick}
    >
      <mesh
        position={[0, !isClickedButton ? 0 : -2.6, 0]}
        castShadow
        receiveShadow
        geometry={(nodes as any).Object_8.geometry}
        material={materials['portal_button_switch']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes as any).Object_9.geometry}
        material={materials['portal_button_blue']}
      />
    </group>
  );
}

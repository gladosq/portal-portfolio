import {Html, useGLTF} from '@react-three/drei';
import {useRef, useState} from 'react';
import {Mesh} from 'three';
import {useFrame} from '@react-three/fiber';

type SpawnButtonProps = {
  onClick: () => void;
  isClickedButton?: boolean;
}

export default function SpawnButton({onClick, isClickedButton}: SpawnButtonProps) {
  const {nodes, materials} = useGLTF('/models/button.glb');
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  // const [isPressed, setPressed] = useState(false);
  const speed = useRef(0.05);
  const direction = useRef(1);
  const initialY = useRef(0);
  // const [targetY, setTargetY] = useState(initialY.current);

  useFrame(() => {
    if (meshRef.current) {
      const currentY = meshRef.current.position.y;
      const diff = initialY.current - currentY;
      const step = speed.current * direction.current;

      if (Math.abs(diff) < step) {
        meshRef.current.position.y = initialY.current;
      } else {
        meshRef.current.position.y += step;
      }

      if (diff > 0 && meshRef.current.position.y >= initialY.current) {
        direction.current = -1;
      } else if (diff < 0 && meshRef.current.position.y <= initialY.current) {
        direction.current = 1;
      }
    }
  });

  return (
    <group
      position={[1, -1.39, 15]}
      scale={0.05}
      onClick={() => {
        // handleClick();
        onClick();
      }}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
    >
      <mesh
        ref={meshRef}
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
      {hovered && <Html><div style={{ cursor: 'pointer' }} /></Html>}
    </group>
  );
}

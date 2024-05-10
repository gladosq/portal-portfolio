import {Float, useGLTF, useScroll} from '@react-three/drei';
import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {calcRotateAngle} from '../utils/math.ts';
import {Group} from 'three';

export default function Glados() {
  const {scene} = useGLTF('/models/glados.glb');
  const group = useRef<Group>(null!);
  const pageScroll = useScroll();

  useFrame((state) => {
    const r1 = pageScroll.range(0 / 6, 1 / 4);
    const offset = 1 - pageScroll.offset;

    group.current.rotation.y = Math.PI - (Math.PI / 2.5) * calcRotateAngle(r1) + 0.33;
    state.camera.position.set(Math.sin(pageScroll.offset) * 2, Math.atan(pageScroll.offset * Math.PI * -4.6) * 4.5, Math.cos((offset * Math.PI) / -3.2) * 15);
    state.camera.lookAt(Math.sin(pageScroll.offset) * 3.6, Math.atan(pageScroll.offset * Math.PI * 3.2) * 2.1, Math.cos((pageScroll.offset * Math.PI) / -3) * 12);
  });

  return (
    <Float
      position={[1, 1.1, -0.5]}
      rotation={[Math.PI / 0.05, 0, 0]}
      rotationIntensity={0.2}
      floatIntensity={1}
      speed={3.5}
    >
      <group
        ref={group}
        position={[8, -5, 2]}
        scale={0.05}
      >
        <object3D position={[-0.6, 2, 0]}/>
        <primitive object={scene}/>
      </group>
    </Float>
  );
}

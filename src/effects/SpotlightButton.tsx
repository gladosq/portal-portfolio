import {SpotLight, useDepthBuffer} from '@react-three/drei';
import {Object3D} from 'three';
import {useState} from 'react';
import {
  useCylinder,
  useDistanceConstraint,
  usePointToPointConstraint,
  useSphere
} from '@react-three/cannon';

export default function SpotlightButton() {
  const depthBuffer = useDepthBuffer();

  const [target] = useState(() => new Object3D());
  const [fixed] = useSphere(() => ({ collisionFilterGroup: 0, type: 'Static', args: [0.2] }))
  // const [lamp] = useCylinder(() => ({ mass: 1, args: [0.5, 1.5, 2, 16], angularDamping: 0.95, linearDamping: 0.95, material: { friction: 0.9 } }))
  // useDistanceConstraint(fixed, lamp, { distance: 2, pivotA: [0, 0, 0], pivotB: [0, 2, 0] })
  // usePointToPointConstraint(fixed, lamp, { pivotA: [0, 0, 0], pivotB: [0, 2, 0] })

  return (
      <mesh position={[1, 15, 22]} rotation={[Math.PI / 7, -Math.PI / 2, 0]}>
        {/*<cylinderGeometry args={[0.5, 1.5, 2, 32]} />*/}
        <meshStandardMaterial />
        <SpotLight
          castShadow
          target={target}
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={14}
          distance={80}
          angle={0.45}
          attenuation={1000}
          anglePower={5}
          intensity={200}
          opacity={0.2}
          color={'rgb(112,137,183)'}
        />
        <primitive object={target} position={[0, -1, 0]} />
      </mesh>
  );
}

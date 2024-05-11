import {RigidBody} from '@react-three/rapier';

export default function GlassBox() {
  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
    color: '#e6e6ee'
  };

  return (
    <RigidBody colliders='hull' gravityScale={10} position={[0, 1, 0]}>
      <group position={[0, 0, -10]} receiveShadow>
        <mesh receiveShadow position={[0, -1, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.03, 3, 10]}/>
          <meshPhysicalMaterial color={'#373e49'}/>
        </mesh>
        <mesh receiveShadow position={[5, -1, 5]}>
          <boxGeometry args={[0.03, 3, 10]}/>
          <meshPhysicalMaterial color={'#373e49'}/>
        </mesh>
        <mesh receiveShadow position={[0, -1, 10]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[0.03, 3, 10]}/>
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
        <mesh receiveShadow position={[-5, -1, 5]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.03, 3, 10]}/>
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
        <mesh receiveShadow position={[0, -2.4, 5]} rotation={[0, 0, -Math.PI / 2]}>
          <boxGeometry args={[0.1, 10, 10]}/>
          <meshPhysicalMaterial color={'#373e49'}/>
        </mesh>
      </group>
    </RigidBody>
  );
}

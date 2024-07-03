import {useGLTF} from '@react-three/drei';

export default function CubeCompanion() {
  // const {nodes, materials} = useGLTF('/models/companion-cube.glb');

  const {scene} = useGLTF('/models/companion-cube.glb');


  // console.log('nodes:', nodes);
  // console.log('materials:', materials);

  return (
    <group
      scale={1}
      position={[0, 0, 0]}
    >
      <object3D position={[-0.6, 2, 0]}/>
      <primitive object={scene}/>
    </group>
  );
}

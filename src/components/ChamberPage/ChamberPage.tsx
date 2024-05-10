import s from './ChamberPage.module.scss';
import {Canvas, useLoader} from '@react-three/fiber';
import {Suspense, useEffect, useMemo, useRef, useState} from 'react';
import {
  ContactShadows,
  Environment, MeshReflectorMaterial,
  OrbitControls,
  Torus,
  TorusKnot,
  useGLTF
} from '@react-three/drei';
import {useBox, usePlane} from '@react-three/cannon';
import {TextureLoader} from 'three';
import {
  CuboidCollider,
  InstancedRigidBodies,
  InstancedRigidBodyProps,
  Physics,
  RapierRigidBody, RigidBody
} from '@react-three/rapier';
import ChamberScene from '../../scenes/ChamberScene.tsx';
import Core from '../../shapes/Core.tsx';
import {nanoid} from 'nanoid';

export default function ChamberPage() {

  const [items, setItems] = useState<string[]>([]);

  const {scene, nodes: nodesCore, materials: materialsCore} = useGLTF('/models/core.glb');


  return (
    <div className={s.wrapper}>
      <div className={s.canvasContainer}>
        <Suspense fallback={null}>
          <Canvas
            shadows
            dpr={[1, 1.5]}
            camera={{ position: [-15, 15, 18], fov: 35 }}
            gl={{
              alpha: false
            }}
          >
            <fog attach="fog" args={['#17171b', 30, 40]} />
            <color attach="background" args={['#17171b']} />
            {/*<fog attach="fog" args={['#191920', 0, 26]} />*/}
            <Environment preset="forest" />


            <Physics>
              <group>
                <RigidBody scale={4} colliders="hull" position={[-1, 2, 0]}>
                  <Core onClick={() => {
                    console.log('clicked!');
                    setItems((prevState) => [...prevState, nanoid()]);
                  }}/>
                </RigidBody>

                <ChamberScene items={items}/>

                <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]}>
                  <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
                </directionalLight>

                {/*<ContactShadows*/}
                {/*  scale={20}*/}
                {/*  blur={0.4}*/}
                {/*  opacity={0.2}*/}
                {/*  position={[-0, -1.5, 0]}*/}
                {/*/>*/}

                <OrbitControls />
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                  <planeGeometry args={[50, 50]} />
                  <MeshReflectorMaterial
                    blur={[400, 100]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={15}
                    depthScale={1}
                    minDepthThreshold={0.85}
                    color="#151515"
                    metalness={0.6}
                    roughness={1}
                    mirror={0.1}
                  />
                </mesh>
              </group>

              <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
            </Physics>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}

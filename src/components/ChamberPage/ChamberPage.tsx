import s from './ChamberPage.module.scss';
import {Canvas} from '@react-three/fiber';
import {Suspense, useEffect, useRef, useState} from 'react';
import {
  Environment,
  OrbitControls, Text,
} from '@react-three/drei';
import {
  CuboidCollider, InstancedRigidBodyProps,
  Physics,
  RigidBody
} from '@react-three/rapier';
import ChamberScene from '../../scenes/ChamberScene.tsx';
import {nanoid} from 'nanoid';
import SpotlightButton from '../../effects/SpotlightButton.tsx';
import {Physics as PhysicsCannon} from '@react-three/cannon';
import GlassBox from '../../shapes/GlassBox.tsx';
import Core from '../../shapes/Core.tsx';
import SpawnButton from '../../shapes/CoreButton.tsx';
import ChamberFloor from '../../shapes/ChamberFloor.tsx';
import {button, useControls} from 'leva';

const fontProps = {
  font: './../../public/fonts/montserrat-600.woff',
  fontSize: 2.5,
  lineHeight: 1,
  'material-toneMapped': false,
  outlineWidth: 0.01,
  outlineColor: 'white',
};

const createBody = (): InstancedRigidBodyProps => ({
  key: Math.random(),
  position: [Math.random() * 20, Math.random() * 20, Math.random() * 20],
  rotation: [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2
  ],
  scale: [0.5 + Math.random(), 0.5 + Math.random(), 0.5 + Math.random()]
});

export default function ChamberPage() {
  const [items, setItems] = useState<string[]>([]);
  const [isClickedButton, setIsClickedButton] = useState<boolean>();
  const textCounterRef = useRef(null!);
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isClickedButton) {
        setIsClickedButton(false);
      }
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [isClickedButton]);

  // const {
  //   nodes: { Suzanne }
  // } = useSuzanne();

  const [bodies, setBodies] = useState<InstancedRigidBodyProps[]>(() =>
    Array.from({
      length: 100
    }).map(() => createBody())
  );

  const addMesh = () => {
    if (bodies.length < 20) {
      setBodies((bodies) => [...bodies, createBody()]);
    }
  };

  useControls(
    {
      "add instanced mesh": button(addMesh),
    },
    [bodies]
  );


  return (
    <div className={s.wrapper}>
      <div className={s.canvasContainer}>
        <Suspense fallback={<h1>loading</h1>}>
          <Canvas
            shadows
            dpr={[1, 1.5]}
            camera={{position: [-30, 15, 24], fov: 35}}
            gl={{
              alpha: false,
              powerPreference: 'high-performance',
              stencil: true,
              antialias: true,
              depth: true
            }}
            className={s.canvas}
          >
            {/*-- Camera --*/}
            <OrbitControls
              // enableZoom={true}
              // enableRotate={true}
              maxPolarAngle={1.3}
              minPolarAngle={1.3}
              minAzimuthAngle={-1.4}
              maxAzimuthAngle={-0.4}
            />
            <Text
              ref={textCounterRef}
              position={[2.2, 5.1, 8]}
              rotation={[0, -1.5, 0]}
              maxWidth={6}
              overflowWrap={'break-word'}
              color='white'
              anchorX='right'
              anchorY='middle'
              {...fontProps}
            >
              {counter}
            </Text>

            {/*-- Effects --*/}
            <fog attach='fog' args={['#17171b', 40, 60]}/>

            {/*-- Environment --*/}
            <ChamberFloor/>
            <Environment preset='city'/>
            <color attach='background' args={['#17171b']}/>

            <Physics>
              {/*-- Models --*/}
              <RigidBody colliders='hull' position={[0, 1.2, -2]} rotation={[1, -6, 6]}>
                <Core/>
              </RigidBody>

              {/*<group>*/}
              {/*  <InstancedRigidBodies instances={bodies} ref={api} colliders="hull">*/}
              {/*    <instancedMesh*/}
              {/*      ref={ref}*/}
              {/*      castShadow*/}
              {/*      args={[(nodes as any).Object_130.geometry, undefined, 20]}*/}
              {/*      count={bodies.length}*/}
              {/*      onClick={(evt) => {*/}
              {/*        api.current![evt.instanceId!].applyTorqueImpulse(*/}
              {/*          {*/}
              {/*            x: 0,*/}
              {/*            y: 50,*/}
              {/*            z: 0*/}
              {/*          },*/}
              {/*          true*/}
              {/*        );*/}
              {/*      }}*/}
              {/*    >*/}
              {/*      <meshPhysicalMaterial />*/}
              {/*    </instancedMesh>*/}
              {/*  </InstancedRigidBodies>*/}
              {/*</group>*/}

              {/*<CubeCompanion/>*/}
              <GlassBox/>
              <ChamberScene
                items={items}
                // position={chamberItemVec}
              />
              <SpawnButton
                onClick={() => {
                  if (isClickedButton) return;
                  // setIsClickedButton(!isClickedButton);
                  setCounter(counter + 1);
                  setItems(() => [...items, nanoid()]);
                }}
                isClickedButton={isClickedButton}
              />

              {/*-- Light --*/}
              <PhysicsCannon>
                <SpotlightButton/>
              </PhysicsCannon>
              <spotLight
                position={[15, 20, 15]}
                angle={40}
                penumbra={1}
                intensity={2800}
                castShadow
                shadow-mapSize={2024}
                distance={420}
                color={'rgb(130,159,176)'}
              />
              <CuboidCollider position={[0, -2, 0]} args={[70, 0.5, 70]}/>
            </Physics>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}

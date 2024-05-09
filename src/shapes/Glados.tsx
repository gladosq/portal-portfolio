import {Float, useAnimations, useGLTF, useScroll} from '@react-three/drei';
import {useControls} from 'leva';
import {DepthOfField} from '@react-three/postprocessing';
import './../materials/LayerMaterial';
import {useEffect, useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {MathUtils} from 'three';
import usePortalStore from '../store/portal.ts';
// import useRefs from 'react-use-refs'

const rsqw = (t, delta = 0.25, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(3 * Math.PI * t * f) / delta)
export default function Glados() {

  const {isMainPageScrolled, setIsMainPageScrolled} = usePortalStore();
  const {scene, animations} = useGLTF('/models/glados.glb');
  const group = useRef(null!);


  const { actions } = useAnimations(animations, scene);
  const pageScroll = useScroll();


  // const {focusDistance, focalLength, bokehScale} = useControls({
  //   focusDistance: {
  //     min: 0,
  //     max: 4,
  //     value: 2
  //   },
  //   focalLength: {
  //     min: 0,
  //     max: 1,
  //     value: 0.1
  //   },
  //   bokehScale: {
  //     min: 0,
  //     max: 10,
  //     value: 0
  //   }
  // });

  useFrame((state, delta) => {
    // const action = actions['Take 001'];

    if (pageScroll.scroll.current >= 0.9) {
      setIsMainPageScrolled(true);
    } else {
      if (isMainPageScrolled) {
        setIsMainPageScrolled(false);
      }
    }


    // console.log('state:', state);


    // console.log('group:', group.current.);


    // const r1 = pageScroll.range(0 / 4, 1 / 4)
    // const r2 = pageScroll.range(1 / 4, 1 / 4)

    const r1 = pageScroll.range(0 / 6, 1 / 4)
    // const r2 = pageScroll.range(2 / 3, 1 / 3)

    group.current.rotation.y = Math.PI - (Math.PI / 2.5) * rsqw(r1) + 0.33

    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = 1 - pageScroll.offset
    // console.log('scroll.offset:', scroll.offset);
    // action.time = MathUtils.damp(action.time, (action?.getClip().duration / 2) * offset, 100, delta)
    state.camera.position.set(Math.sin(pageScroll.offset) * 2, Math.atan(pageScroll.offset * Math.PI * -4.6) * 4.5, Math.cos((offset * Math.PI) / -3.2) * 15)
    // state.camera.position.set(0, 4, 5)
    state.camera.lookAt(Math.sin(pageScroll.offset) * 3.6, Math.atan(pageScroll.offset * Math.PI * 3.2) * 2.1, Math.cos((pageScroll.offset * Math.PI) / -3) * 12)
  })


  return (
    <Float position={[1, 1.1, -0.5]} rotation={[Math.PI / 0.05, 0, 0]} rotationIntensity={0.2} floatIntensity={1} speed={3.5}>
      <group
        ref={group}
        position={[8, -5, 2]}
        // position={[10, -6, 2]}
        scale={0.05}
        // rotation={[-Math.PI / 8, 2.2, 0]}
      >
        <object3D position={[-0.6, 2, 0]} />
        {/*<DepthOfField*/}
        {/*  focusDistance={focusDistance}*/}
        {/*  focalLength={focalLength}*/}
        {/*  bokehScale={bokehScale}*/}
        {/*/>*/}
        <primitive object={scene}/>
      </group>

    </Float>
    // <group
    //   ref={group}
    //   position={[10, -6, 2]}
    //   scale={0.05}
    //   // rotation={[-Math.PI / 8, 2.2, 0]}
    // >
    //   {/*<DepthOfField*/}
    //   {/*  focusDistance={focusDistance}*/}
    //   {/*  focalLength={focalLength}*/}
    //   {/*  bokehScale={bokehScale}*/}
    //   {/*/>*/}
    //   <primitive object={scene}/>
    // </group>
  );
}

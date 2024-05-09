import {OrbitControls, useScroll} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {useEffect, useRef} from 'react';
import {rsqw} from 'maath/easing';
import {MathUtils} from 'three';

export default function ScrollScreen() {
  const scroll = useScroll();

  // useFrame((state, delta) => {
  //   const action = actions['Take 001'];
  //
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1 - scroll.offset
  //   console.log('scroll.offset:', scroll.offset);
  //   action.time = MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
  //   state.camera.lookAt(0, 0, 0)
  // })
  //
  // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  // useFrame((state, delta) => {
  //   const action = actions['Take 001']
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1 - scroll.offset
  //   console.log('scroll.offset:', scroll.offset);
  //   action.time = MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
  //   state.camera.lookAt(0, 0, 0)
  // })
  return (
    <OrbitControls enableZoom={false} position={[0, 0, 0]}/>
  );
}

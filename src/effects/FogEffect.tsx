import {useFrame} from '@react-three/fiber';
import {useScroll} from '@react-three/drei';
import {useRef} from 'react';


const rsqw = (t, delta = 0.25, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(3 * Math.PI * t * f) / delta)


export default function FogEffect() {
  const fogRef = useRef(null!);
  const pageScroll = useScroll();

  useFrame(() => {
    // const fogOffset = Math.tan((pageScroll.scroll.current / Math.PI - 12)) * 600;
    // const r1 = pageScroll.range(0 / 6, 1 / 4)

    const fogOffset = 20 * Math.PI * pageScroll.scroll.current * 22 + 30;

    console.log('fogOffset:', fogOffset);


    fogRef.current.far = fogOffset;
  });

  return (
    <fog ref={fogRef} attach="fog" args={['rgba(32,32,37,0.5)', 0, 20]} />
  );
}

import {Float, useScroll, Text} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {useLayoutEffect, useRef, useState} from 'react';
import {getRandomNumber} from '../utils/math.ts';
import {phrases} from '../store/portal.ts';

export default function TextScroll() {
  const pageScroll = useScroll();
  const textOneRef = useRef<any>(null!);
  const [phraseIndex, setPhraseIndex] = useState<number>();

  useLayoutEffect(() => {
    const randomN = getRandomNumber(0, phrases.length - 1);
    setPhraseIndex(randomN);
  }, []);

  const fontProps = {
    font: './../../public/fonts/montserrat-600.woff',
    fontSize: 0.5,
    lineHeight: 1,
    'material-toneMapped': false,
    outlineWidth: 0.01,
    outlineColor: 'white',
  };

  useFrame(() => {
    const firstTextOpacityOffset = Math.cos((pageScroll.offset * 1.8) / 3) * 16 - 15;

    textOneRef.current.fillOpacity = firstTextOpacityOffset < 0 ? 0 : firstTextOpacityOffset;
    textOneRef.current.outlineOpacity = firstTextOpacityOffset < 0 ? 0 : firstTextOpacityOffset;
  });

  return (
    <>
      <Float floatIntensity={1.6} rotationIntensity={0.6}>
        <group>
          <Text
            ref={textOneRef}
            position={[2.2, -1.1, 4]}
            maxWidth={6}
            overflowWrap={'break-word'}
            color='white'
            anchorX='right'
            anchorY='middle'
            textAlign={"left"}
            {...fontProps}
          >
            {(phraseIndex || phraseIndex === 0) && phrases[phraseIndex][0]}
          </Text>
        </group>
      </Float>
      <Float floatIntensity={1.3} rotationIntensity={0.2}>
        <group>
          <Text
            position={[3, -3, 10]}
            overflowWrap={'break-word'}
            maxWidth={6}
            color='white'
            anchorX='right'
            anchorY='middle'
            textAlign={"left"}
            depthOffset={0.1}
            {...fontProps}
          >
            {(phraseIndex || phraseIndex === 0) && phrases[phraseIndex][1]}
          </Text>
        </group>
      </Float>
    </>
  );
}

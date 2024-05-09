import s from './MainPage.module.scss';
import {Canvas, useFrame} from '@react-three/fiber';
import {Suspense, useEffect, useLayoutEffect} from 'react';
import Glados from '../../shapes/Glados.tsx';
import EnvironmentRoom from '../../environments/EnvironmentRoom.tsx';
import {DepthOfField, EffectComposer, Noise, Vignette} from '@react-three/postprocessing';
import {
  Backdrop,
  Environment,
  OrbitControls,
  Scroll,
  ScrollControls,
  useAnimations,
  useGLTF,
  useScroll
} from '@react-three/drei';
// import GlitchEffect from '../../effects/GlitchEffect.tsx';
import RotatingScreen from '../../camera/RotatingScreen.tsx';
import LightEffect from '../../effects/LightEffect.tsx';
import AudioPlayerComponent from '../AudioPlayerComponent/AudioPlayerComponent.tsx';
import {BlendFunction} from 'postprocessing';
import Paper from '../Paper/Paper.tsx';
import usePortalStore from '../../store/portal.ts';

export default function MainPage() {
  const {isMainPageScrolled, setIsMainPageScrolled} = usePortalStore();

  console.log('isMainPageScrolled:', isMainPageScrolled);

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        {isMainPageScrolled && (
          <Paper/>
        )}
        {/*<AudioPlayerComponent/>*/}
      </div>
      <div className={s.canvasContainer}>
        <Suspense fallback={null}>
          <Canvas
            className={s.canvas}
            shadows
            dpr={[1, 2]}
            camera={{position: [0, 0, 10], fov: 64}}
            gl={{
              alpha: false,
              powerPreference: "high-performance",
              // stencil: true,
              // antialias: true,
              // depth: true,
            }}
          >
            <EffectComposer>
              {/*<Backdrop castShadow floor={2} position={[0, -3, -3]} scale={[50, 10, 4]}>*/}
              {/*  <meshStandardMaterial color="#353540" envMapIntensity={0.1} />*/}
              {/*</Backdrop>*/}

              {/*<DepthOfField*/}
              {/*  focusDistance={focusDistance}*/}
              {/*  focalLength={focalLength}*/}
              {/*  bokehScale={bokehScale}*/}
              {/*/>*/}

              {/*LUMINOSITY*/}
              <Noise premultiply blendFunction={BlendFunction.ADD}/>
              <ScrollControls
                pages={4}

              >
                <Glados/>
              </ScrollControls>
              <OrbitControls enableZoom={false}/>

              <RotatingScreen/>
              {/*<ScrollScreen/>*/}
              <LightEffect/>
              {/*<Scroll/>*/}
              <directionalLight
                position={[30, 30, 135]}
                intensity={3}
                castShadow
                color={'rgb(109,117,124)'}
              />
              {/*<Environment*/}
              {/*  files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr"*/}
              {/*  ground={{ height: 5, radius: 40, scale: 20 }}*/}
              {/*/>*/}
              <EnvironmentRoom/>
              {/*<Glados/>*/}
              {/*<GlitchEffect/>*/}
              <Vignette/>
            </EffectComposer>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}

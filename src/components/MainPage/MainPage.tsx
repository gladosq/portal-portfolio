import s from './MainPage.module.scss';
import {Canvas} from '@react-three/fiber';
import {Suspense, useState} from 'react';
import Glados from '../../shapes/Glados.tsx';
import EnvironmentRoom from '../../environments/EnvironmentRoom.tsx';
import {EffectComposer, Noise, Vignette} from '@react-three/postprocessing';
import {ScrollControls} from '@react-three/drei';
import RotatingMainScreen from '../../camera/RotatingMainScreen.tsx';
import {BlendFunction} from 'postprocessing';
import GlitchEffect from '../../effects/GlitchEffect.tsx';
import TextScroll from '../../shapes/TextScroll.tsx';
import RotatingLightEffect from '../../effects/RotatingLightEffect.tsx';
import {useAnimateRoute} from '../../hooks/useAnimateRoute.tsx';
import {clsx} from 'clsx';

export default function MainPage() {
  const animationClass = useAnimateRoute();

  const [interacted, setInteracted] = useState(false);

  return (
    <div className={clsx(s.wrapper, animationClass)}>
      <div className={s.canvasContainer}>
        {interacted ? (
          <Suspense fallback={<h1>loading</h1>}>
            <Canvas
              className={s.canvas}
              shadows
              dpr={[1, 2]}
              camera={{position: [0, 0, 10], fov: 64}}
              gl={{
                alpha: false,
                powerPreference: 'high-performance',
                stencil: true,
                antialias: true,
                depth: true
              }}
            >
              <ScrollControls
                pages={1.6}
              >
                <EffectComposer>
                  {/*-- Light --*/}
                  <RotatingLightEffect/>
                  <directionalLight
                    position={[30, 30, 135]}
                    intensity={6}
                    castShadow
                    color={'rgb(109,117,124)'}
                  />

                  {/*-- Models and environments --*/}
                  <TextScroll/>
                  <Glados/>
                  <EnvironmentRoom/>

                  {/*-- Camera --*/}
                  <RotatingMainScreen/>

                  {/*-- Effects --*/}
                  <GlitchEffect/>
                  <Vignette/>
                  <Noise premultiply blendFunction={BlendFunction.ADD}/>
                </EffectComposer>
              </ScrollControls>
            </Canvas>
          </Suspense>
        ) : (
          <>
            <button
              onClick={() => {
                setInteracted(true);
              }}
            >click</button>
          </>
        )}

      </div>
    </div>
  );
}

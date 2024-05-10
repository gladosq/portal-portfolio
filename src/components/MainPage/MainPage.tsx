import s from './MainPage.module.scss';
import {Canvas} from '@react-three/fiber';
import {Suspense} from 'react';
import Glados from '../../shapes/Glados.tsx';
import EnvironmentRoom from '../../environments/EnvironmentRoom.tsx';
import {EffectComposer, Noise, Vignette} from '@react-three/postprocessing';
import {ScrollControls,} from '@react-three/drei';
import RotatingScreen from '../../camera/RotatingScreen.tsx';
import AudioPlayerComponent from '../AudioPlayerComponent/AudioPlayerComponent.tsx';
import {BlendFunction} from 'postprocessing';
import GlitchEffect from '../../effects/GlitchEffect.tsx';
import TextScroll from '../../shapes/TextScroll.tsx';
import RotatingLightEffect from '../../effects/RotatingLightEffect.tsx';
import {Link} from 'react-router-dom';

export default function MainPage() {

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <AudioPlayerComponent/>
        <Link to={'/chamber'}>go to chamber</Link>
      </div>
      <div className={s.canvasContainer}>
        <Suspense fallback={null}>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{position: [0, 0, 10], fov: 64}}
            gl={{
              alpha: false,
              powerPreference: "high-performance",
              stencil: true,
              antialias: true,
              depth: true,
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
                <RotatingScreen/>

                {/*-- Effects --*/}
                <GlitchEffect/>
                <Vignette/>
                <Noise premultiply blendFunction={BlendFunction.ADD}/>
              </EffectComposer>
            </ScrollControls>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}

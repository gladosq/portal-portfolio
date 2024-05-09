import {GlitchMode} from 'postprocessing';
import {Glitch} from '@react-three/postprocessing';

export default function GlitchEffect() {
  return (
    <Glitch
      delay={[15.5, 30.5]}
      duration={[0.1, 0.3]}
      strength={[0.1, 0.2]}
      mode={GlitchMode.SPORADIC}
      active
      ratio={0.05}
    />
  );
}

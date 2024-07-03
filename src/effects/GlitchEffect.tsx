import {GlitchMode} from 'postprocessing';
import {Glitch} from '@react-three/postprocessing';
import {Vector2} from 'three';

const vectorDelay = new Vector2();
const vectorDuration = new Vector2();
const vectorStrength = new Vector2();

export default function GlitchEffect() {
  vectorDelay.set(8.5, 24.5);
  vectorDuration.set(0.1, 0.3);
  vectorStrength.set(0.1, 0.2);

  return (
    <Glitch
      delay={vectorDelay}
      duration={vectorDuration}
      strength={vectorStrength}
      mode={GlitchMode.SPORADIC}
      active
      ratio={0.05}
    />
  );
}

import {folder, useControls} from 'leva';
import {Color} from 'three';
import {useTexture} from '@react-three/drei';
import {LensFlare} from '@react-three/postprocessing';

export default function LensFlareEffect() {
  const texture = useTexture('/public/images/room-bg.jpg');

  const lensFlareProps = useControls({
    LensFlare: folder(
      {
        enabled: {value: true, label: 'enabled?'},
        opacity: {value: 0.4, min: 0.0, max: 1.0, label: 'opacity'},
        position: {value: {x: 11, y: 5.2, z: 1}, step: 1, label: 'position'},
        // position: {value: {x: 10, y: 5.2, z: 1}, step: 1, label: 'position'},
        glareSize: {value: 0.1, min: 0.01, max: 1.0, label: 'glareSize'},
        starPoints: {value: 0.1, step: 1.0, min: 0, max: 32.0, label: 'starPoints'},
        animated: {value: true, label: 'animated?'},
        followMouse: {value: false, label: 'followMouse?'},
        anamorphic: {value: false, label: 'anamorphic?'},
        // @ts-ignore
        colorGain: {value: new Color(73, 102, 189), label: 'colorGain'},
        Flare: folder({
          flareSpeed: {value: 0.4, step: 0.001, min: 0.0, max: 1.0, label: 'flareSpeed'},
          flareShape: {value: 0.1, step: 0.001, min: 0.0, max: 1.0, label: 'flareShape'},
          flareSize: {value: 0.002, step: 0.001, min: 0.0, max: 0.01, label: 'flareSize'}
        }),
        SecondaryGhosts: folder({
          secondaryGhosts: {value: true, label: 'secondaryGhosts?'},
          ghostScale: {value: 0.1, min: 0.01, max: 1.0, label: 'ghostScale'},
          aditionalStreaks: {value: true, label: 'aditionalStreaks?'}
        }),
        StartBurst: folder({
          starBurst: {value: true, label: 'starBurst?'},
          haloScale: {value: 0.1, step: 0.01, min: 0.3, max: 1.0}
        })
      },
      {collapsed: true}
    )
  });

  return <LensFlare {...lensFlareProps} lensDirtTexture={texture}/>;
}

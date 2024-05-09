import {useRef} from 'react';
import {useTexture} from '@react-three/drei';

export default function Portal() {
  const portalMaterial = useRef();
  const bakedTexture = useTexture('/public/images/room-bg.jpg');

  return (
    <div>

    </div>
  );
}

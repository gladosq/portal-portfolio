import {Environment, useTexture} from '@react-three/drei';

export default function EnvironmentChamber() {
  const map = useTexture('./images/room-bg-dark.jpg');

  return (
    <Environment map={map}/>
  );
}

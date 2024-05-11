import {RigidBody} from '@react-three/rapier';
import Core from '../shapes/Core.tsx';

type ChamberSceneProps = {
  items: string[];
}

export default function ChamberScene({items}: ChamberSceneProps) {
  return items.map((item) => {
    return (
      <group key={item}>
        <RigidBody colliders='hull' position={[3, 15, -6]}>
          <Core/>
        </RigidBody>
      </group>
    )
  });
}

import {RigidBody} from '@react-three/rapier';
import Core from '../shapes/Core.tsx';

type ChamberSceneProps = {
  items: [];
}

export default function ChamberScene({items}: ChamberSceneProps) {
  return items.map((item) => {
    return (
      <group key={item}>
        <RigidBody colliders="hull" position={[-1, 2, 0]}>
          <Core/>
        </RigidBody>
      </group>

    )
  })
}

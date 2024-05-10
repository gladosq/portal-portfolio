import {useFrame} from '@react-three/fiber';
import {Vector3} from 'three';

const vec = new Vector3();

export default function RotatingScreen() {
  return useFrame(({camera, pointer}) => {
    vec.set(pointer.x * 3.8, pointer.y * 1.4, camera.position.z)
    camera.position.lerp(vec, 0.125)
    camera.lookAt(0, 0, 0)
  })
}

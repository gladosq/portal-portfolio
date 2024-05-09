import s from './Paper.module.scss';
import paperTexture from './../../../public/images/papers-bg.png';
import ApertureIcon from '../../icons/ApertureIcon.tsx';

export default function Paper() {
  return (
    <div className={s.wrapper}>
      <div className={s.paper}>
        <img className={s.image} src={paperTexture} alt='Текстура бумаги'/>
      </div>
      <ApertureIcon/>
    </div>
  );
}

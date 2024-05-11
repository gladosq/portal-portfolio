import s from './MainAppLayout.module.scss';
import AudioPlayerComponent from '../AudioPlayerComponent/AudioPlayerComponent.tsx';
import {Link, useLocation} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {Suspense, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import usePortalStore from '../../store/portal.ts';
import {clsx} from 'clsx';
import ArrowIcon from '../../icons/ArrowIcon.tsx';

export default function MainAppLayout() {
  const [isRouting, setIsRouting] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const {routingPage, setRoutingPage} = usePortalStore();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsRouting(false);
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [routingPage]);

  console.log('routingPage:', routingPage);
  console.log('isRouting:', isRouting);

  return (
    <Suspense fallback={<h1>loading</h1>}>
      <div className={clsx(s.wrapper, isRouting && s.wrapperRouting)}>
        <div className={s.content}>
          <AudioPlayerComponent/>
          <div className={s.links}>
            {pathname === '/' &&
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setIsRouting(true);
                  setTimeout(() => {
                    navigate('/chamber');
                    setRoutingPage('/chamber');
                  }, 600);
                }}
                className={s.link}
                to={'/chamber'}
              >
                chamber
                <ArrowIcon/>
              </Link>}
            {pathname === '/chamber' &&
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setIsRouting(true);
                  setTimeout(() => {
                    navigate('/');
                    setRoutingPage('/');
                  }, 600);
                }}
                className={s.link}
                to={'/'}
              >
                glados
                <ArrowIcon/>
              </Link>}
          </div>
        </div>
        <Outlet/>
      </div>
    </Suspense>
  );
}

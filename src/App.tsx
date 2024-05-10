import {Route, Routes} from 'react-router-dom';
import '@/styles/global.scss';
import '@/styles/font-family.scss';
import MainPage from './components/MainPage/MainPage.tsx';
import ChamberPage from './components/ChamberPage/ChamberPage.tsx';

export default function App() {
  return (
    <Routes location={location}>
      <Route index path='/' element={<MainPage/>}/>
      <Route index path='/chamber' element={<ChamberPage/>}/>
    </Routes>
  );
}

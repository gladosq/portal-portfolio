import s from './AudioPlayerComponent.module.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import {useEffect, useState} from 'react';
import track1 from './../../../public/audio/9999999.mp3';
import track2 from './../../../public/audio/self-esteem-fund.mp3';

export default function AudioPlayerComponent() {
  const [currentTrack, setTrackIndex] = useState(0);
  const [play, setPlay] = useState(false);

  const playlist = [
    { src: track1 },
    { src: track2 },
  ];

  const clickNextHandler = () => {
    setTrackIndex((currentTrack) => currentTrack < playlist.length - 1 ? currentTrack + 1 : 0);
  };

  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <div className={s.wrapper}>
      <AudioPlayer
        autoPlay
        src={playlist[currentTrack].src}
        showSkipControls
        onClickNext={clickNextHandler}
        showFilledProgress={false}
        showDownloadProgress={false}
        showJumpControls={false}
        progressUpdateInterval={50}
        volume={0.5}
      />
    </div>
  );
}

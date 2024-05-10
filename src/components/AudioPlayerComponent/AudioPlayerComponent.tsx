import s from './AudioPlayerComponent.module.scss';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import {useEffect, useState} from 'react';
import track1 from './../../../public/audio/9999999.mp3';
import track2 from './../../../public/audio/you-know-her.mp3';

export default function AudioPlayerComponent() {
  const [currentTrack, setTrackIndex] = useState(0);
  const [, setPlay] = useState(false);

  const playlist = [
    { src: track2 },
    { src: track1 },
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

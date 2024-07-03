import s from './AudioPlayerComponent.module.scss';
import {useEffect, useRef, useState} from 'react';
import track1 from './../../../public/audio/9999999.mp3';
import track2 from './../../../public/audio/you_know_her.mp3';
import track3 from './../../../public/audio/there_she_is.mp3';
import track4 from './../../../public/audio/self_esteem_fund.mp3';
import PlayerIcon from './../../icons/PlayerIcon.tsx';
import PauseIcon from './../../icons/PauseIcon.tsx';
import ForwardIcon from '../../icons/ForwardIcon.tsx';

export default function AudioPlayerComponent() {
  const [currentTrack, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null!);

  const playlist = [
    {src: track1},
    {src: track2},
    {src: track3},
    {src: track4},
  ];

  const attemptPlay = () => {
    audioRef &&
    audioRef.current &&
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        setIsPlaying(false);
        console.error('Error attempting to play', error);
      });
  };

  const nextHandler = () => {
    if (currentTrack >= playlist.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef, currentTrack]);

  return (
    <div className={s.wrapper}>
      {!isPlaying && (
        <button onClick={attemptPlay}>
          <PlayerIcon/>
        </button>
      )}
      {isPlaying && (
        <button
          onClick={() => {
            audioRef &&
            audioRef.current &&
            audioRef.current.pause();
            setIsPlaying(false);
          }}
        >
          <PauseIcon/>
        </button>
      )}
      <button
        onClick={nextHandler}
      >
        <ForwardIcon/>
      </button>
      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        playsInline
      >
      </audio>
    </div>
  );
}

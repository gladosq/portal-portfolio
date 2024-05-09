import {useState} from 'react';

export default function EnvironmentTestPage() {
  const [test, setTest] = useState('empty string');

  return (
    <button
      onClick={() => {
        setTest(
          (prevState) => {
            return prevState + '1000';
          }
        );
      }}
    >
      клац
    </button>

  );
}

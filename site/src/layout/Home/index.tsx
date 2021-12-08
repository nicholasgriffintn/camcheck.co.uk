import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

export const Home = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');
  const [cameraOptions, setCameraOptions] = useState<MediaDeviceInfo[]>([]);
  const [selectedCamera, setSelectedCamera] = useState(0);
  const [microphoneOptions, setMicrophoneOptions] = useState<MediaDeviceInfo[]>(
    [],
  );
  const [selectedMicrophone, setSelectedMicrophone] = useState(0);
  const [speakerOptions, setSpeakerOptions] = useState<MediaDeviceInfo[]>([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState(0);

  const videoRef = useRef(null);

  async function getCameras() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cameras = devices.filter(device => device.kind === 'videoinput');
    setCameraOptions(cameras);
    return cameras;
  }

  async function getCameraOutput(cameras = cameraOptions) {
    const streamPromises = cameras.map(function (camera) {
      return navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { deviceId: { exact: camera.deviceId } },
      });
    });

    const streams = await Promise.all(streamPromises).catch(err => {
      console.error(err);
      setError(err);
    });

    console.log('STREAMS:');
    console.log(streams);

    // @ts-ignore
    if (streams?.length > 0) {
      // @ts-ignore
      return streams[selectedCamera];
    }

    return null;
  }

  async function getMicrophones() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const microphones = devices.filter(device => device.kind === 'audioinput');
    setMicrophoneOptions(microphones);
    return microphones;
  }

  async function getSpeakers() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const speakers = devices.filter(device => device.kind === 'audiooutput');
    setSpeakerOptions(speakers);
    return speakers;
  }

  async function setupCamCheck() {
    if (navigator?.mediaDevices?.getUserMedia) {
      setStatus('retrieving');

      let video = videoRef.current;

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true,
      });

      const cameras = await getCameras();
      console.log('CAMERAS:');
      console.log(cameras);
      const microphones = await getMicrophones();
      console.log('MICROPHONES:');
      console.log(microphones);
      const speakers = await getSpeakers();
      console.log('SPEAKERS:');
      console.log(speakers);

      if (cameras && cameras.length > 0) {
        setStatus('streaming');

        const videoSrc = await getCameraOutput(cameras);

        console.log('SRCOBJECT');
        console.log(videoSrc);

        // @ts-ignore
        video.srcObject = videoSrc;
        // @ts-ignore
        video.play();
      } else {
        setStatus('nocamera');
      }
    } else {
      setStatus('nocamera');
    }
  }

  useEffect(() => {
    setupCamCheck();
  }, []);

  return (
    <>
      <Head>
        <title>CamCheck</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="text-4xl font-semibold text-white uppercase lg:text-6xl mb-10">
              {status === 'retrieving'
                ? 'Retrieving your camera setup now...'
                : status === 'nocamera'
                ? "It appears that you don't have a webcam!"
                : status === 'streaming'
                ? 'Looking good!'
                : 'Please wait...'}
            </h1>
            <div className="camera">
              <video autoPlay playsInline muted ref={videoRef}></video>
            </div>
            {error ? <p>Whoops! An error occurred!</p> : null}
          </div>
        </div>
      </section>
    </>
  );
};

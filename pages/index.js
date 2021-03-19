import { useState, useRef, useEffect } from 'react';
import Track from '../components/Track';
import Player from '../components/Player';

export default function MediaPlayer({ tracksById }) {
  // set initial activeTrackId to first track
  const [activeTrackId, setActiveTrackId] = useState(
    Object.keys(tracksById)[0]
  );

  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, imageUrl, mediaUrl } = tracksById[activeTrackId];

  // play or pause the player ref
  // when the value of isPlaying
  // is changed
  useEffect(() => {
    if (isPlaying) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  }, [isPlaying]);

  function setActiveTrack(id) {
    setActiveTrackId(id);
    setIsPlaying(true);
  }

  function setActiveNextTrack(id) {
    const trackArray = Object.keys(tracksById);
    const trackPosition = trackArray.indexOf(id);

    // if the position of the activeTrackId
    // is not the last position
    // increment the activeTrackId by 1
    if (trackPosition !== trackArray.length - 1) {
      setActiveTrackId(trackArray[trackPosition + 1]);
    }
  }

  function setActivePreviousTrack(id) {
    const trackArray = Object.keys(tracksById);
    const trackPosition = trackArray.indexOf(id);

    // if the position of the activeTrackId
    // is not the first position
    // decrement the activeTrackId by 1
    if (trackPosition > 0) {
      setActiveTrackId(trackArray[trackPosition - 1]);
    }
  }

  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <h1 className="my-10 max-w-3xl mx-auto text-center text-5xl font-display">
          Backstreet's Back
        </h1>
        <div className="flex h-player">
          <div className="w-1/2 h-2/3 px-4">
            <Player
              autoPlay={isPlaying}
              ref={playerRef}
              mediaSrc={mediaUrl}
              imgSrc={imageUrl}
              title={title}
              onPlay={() => setIsPlaying(!isPlaying)}
              onNext={() => setActiveNextTrack(activeTrackId)}
              onPrevious={() => setActivePreviousTrack(activeTrackId)}
              isPlaying={isPlaying}
            />
          </div>
          <div className="w-1/2 px-4 overflow-hidden overflow-y-scroll">
            <ul className="">
              {Object.keys(tracksById).map((id) => (
                <li className="mb-4">
                  <Track
                    key={id}
                    onClick={() => setActiveTrack(id)}
                    isPlaying={activeTrackId === id && isPlaying}
                    {...tracksById[id]}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://s3-us-west-2.amazonaws.com/anchor-website/challenges/bsb.json'
  );

  const { tracks } = await res.json();

  // hash tracks by unique id for O(1)
  // look up time when accessing active
  // track data later
  const tracksById = tracks.reduce((tracksObj, track, idx) => {
    tracksObj[idx] = track;
    return tracksObj;
  }, {});

  return {
    props: {
      tracksById,
    },
  };
}

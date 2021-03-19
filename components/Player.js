import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const Player = React.forwardRef(
  (
    {
      mediaSrc,
      title,
      imgSrc,
      onNext,
      onPrevious,
      onPlay,
      autoPlay,
      isPlaying,
    },
    ref
  ) => {
    const isAudio = mediaSrc.includes('.m4a');
    const playPauseText = isPlaying ? 'Pause' : 'Play';

    return (
      <>
        {isAudio && (
          <Image
            src={imgSrc}
            alt="Backstreet Boys"
            className="object-cover h-full w-full"
            width={640}
            height={480}
          />
        )}
        <video
          className={isAudio ? 'hidden' : 'object-cover h-full w-full'}
          width={640}
          height={480}
          autoPlay={autoPlay}
          ref={ref}
          src={mediaSrc}
          preload="auto"
          onEnded={onNext}
        />
        <div className="flex justify-between pt-2">
          <div className="flex items-start pr-4">
            <button
              className="pr-2 text-sm focus:outline-none"
              onClick={onPrevious}
            >
              Previous
            </button>
            <button
              className="pr-2 text-sm focus:outline-none"
              onClick={onPlay}
            >
              {playPauseText}
            </button>
            <button className="text-sm focus:outline-none" onClick={onNext}>
              Next
            </button>
          </div>
          <p className="self-center text-sm font-body text-gray-400 text-right">
            {title}
          </p>
        </div>
      </>
    );
  }
);

Player.propTypes = {
  mediaSrc: PropTypes.string,
};

export default Player;

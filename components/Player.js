import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';

const Player = React.forwardRef(
  ({ mediaSrc, title, imgSrc, onNext, onPrevious, onPlay, autoPlay }, ref) => {
    const isAudio = mediaSrc.includes('.m4a');

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
        <p className="text-sm text-gray-400">{title}</p>
        <div>
          <button type="button" id="previous" onClick={onPrevious}>
            Previous
          </button>
          <button type="button" id="play-pause" onClick={onPlay}>
            Play
          </button>
          <button type="button" id="next" onClick={onNext}>
            Next
          </button>
        </div>
      </>
    );
  }
);

Player.propTypes = {
  mediaSrc: PropTypes.string,
};

export default Player;

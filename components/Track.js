import cx from 'classnames';

const Track = ({ title, onClick, isPlaying }) => {
  // solves for current data set
  // split up title into song and artist
  const [, song = title, artist = ''] = title.match(/(.*) by (.*)/);

  const buttonClassNames = cx('flex flex-col w-full pl-4 focus:outline-none', {
    'shadow-md py-4': isPlaying,
  });

  return (
    <button onClick={onClick} className={buttonClassNames}>
      <p className="font-body">{song}</p>
      {artist && <p className="text-sm text-gray-400 font-body">{artist}</p>}
    </button>
  );
};

export default Track;

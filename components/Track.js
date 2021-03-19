import cx from 'classnames';

const Track = ({ title, onClick, isPlaying }) => {
  // solves for current data set
  const titleSplit = title.split('by');
  const song = titleSplit[0] || title;
  const artist = titleSplit[1] || '';

  const buttonClassNames = cx('flex flex-col w-full pl-4 focus:outline-none', {
    'shadow-md py-4': isPlaying,
  });

  return (
    <button onClick={onClick} className={buttonClassNames}>
      <p className="">{song}</p>
      {artist && <p className="text-sm text-gray-400">{artist}</p>}
    </button>
  );
};

export default Track;

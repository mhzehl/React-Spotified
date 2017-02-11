import React, { PropTypes } from 'react';
import styles from './SongItem.css';

const SongItem = (props) => {
  const { songData } = props;
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[1];

  return (
    <div className={styles.root}>
      <div className={styles.album}>
        <img role="presentation" src={albumImage.url} className={styles.image} />
      </div>
      <div className={styles.songAndDescription}>
        <audio controls duration src={songData.preview_url} />
        <span className={styles.songTitle}>{songData.name}</span>
        <div className={styles.songDetails}>
          <span className={styles.songDescription}>Album:&nbsp;{albumName}</span>
          <span className={styles.songDescription}>Duration:&nbsp;{songData.duration_ms / 1000}s</span>
        </div>
      </div>
    </div>
  );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;

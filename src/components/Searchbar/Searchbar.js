import React, { PropTypes } from 'react';
import styles from './Searchbar.css';

const Searchbar = (props) => (
  <div className={styles.root}>
    <input className={styles.input} onChange={(e) => props.updateText(e.target.value)} />
    <button className={styles.button} onClick={props.fetchSongs}>Get song!</button>
  </div>
);

Searchbar.propTypes = {
  updateText: PropTypes.func,
  fetchSongs: PropTypes.func,
};

export default Searchbar;

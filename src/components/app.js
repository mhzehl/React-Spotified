import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: '',
      tracks: {},
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }

  render() {
    const { tracks } = this.state;
    return (
      <div>
        <Searchbar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {tracks.items && <SongItem songData={tracks.items[0]} />}
      </div>
    );
  }
}

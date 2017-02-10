import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import searchSpotify from '../utils/searchSpotify';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: '',
    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then((tracks) => console.log('tracks', tracks));
  }

  render() {
    return (
      <div>
        <Searchbar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
      </div>
    );
  }
}

import React from "react";
import "./SavedPlaylist.css"

class SavedPlaylist extends React.Component {
  render() {
    return (
      <div className="SavedPlaylist">
        <h2>Saved Playlists</h2>
        <ul>
          {this.props.savedPlaylists.map((playlist) => {
            return (
              <li>
                <h3>{playlist.name}</h3>
                <p>
                  {playlist.artist} | {playlist.album}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SavedPlaylist;

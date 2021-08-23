export class Track {
  id: string;
  artist: string;
  name: string;
  release_date: string

  constructor(track) {
    this.id = track.id;
    this.artist = track.artists[0].name;
    this.name = track.name;
    this.release_date = track.album.release_date;
  }
}
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private readonly clientId = "08fff13cd9cf41a6b877c71ffd33e914";
  private readonly redirectUri = `http://${environment.production ? 'noncsi-quizgame.herokuapp.com' : 'localhost:4200'}/game`;
  private readonly scopes = // separate them with space
    "playlist-read-private " +
    "user-read-playback-state " +
    "user-modify-playback-state " +
    "user-read-currently-playing "

  private readonly urlAUTH = "https://accounts.spotify.com/authorize";

  ngOnInit() {
    window.location.href =
      this.urlAUTH +
      `?client_id=${this.clientId}` +
      `&response_type=code` +
      `&redirect_uri=${encodeURI(this.redirectUri)}` +
      `&scope=${this.scopes}`;
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  private readonly clientId = "08fff13cd9cf41a6b877c71ffd33e914";
  private readonly clientSecret = "d65439d38e974d66ace76d0968e1f516";
  private readonly redirectUri = "http://localhost:4200/game";

  // urls
  private readonly urlTOKEN = "https://accounts.spotify.com/api/token"
  private readonly urlAPI = "https://api.spotify.com/v1/";
  private readonly urlMYAPI = "https://api.spotify.com/v1/me/";

  setFirstHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(this.clientId + ':' + this.clientSecret)}`
    })
  }

  exchangeCodeForTokens(code: string) {
    const body =
      `grant_type=authorization_code` +
      `&code=` + code +
      `&redirect_uri=${encodeURI(this.redirectUri)}` +
      `&client_id=${this.clientId}` +
      `&client_secret=${this.clientSecret}`;

    return this.http.post(this.urlTOKEN, body, { headers: this.setFirstHeaders() })
  }

  setHeaders(accessToken: string) {
    return new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${accessToken}`
    })
  }

  requestRefreshToken(accessToken: string, previousRefreshToken: string) {
    const body =
      `grant_type=refresh_token` +
      `&refresh_token=${previousRefreshToken}` +
      `&client_id=${this.clientId}`

    return this.http.post(this.urlTOKEN, body, { headers: this.setHeaders(accessToken) })
  }

  getTrack(accessToken: string, trackUri: string) {
    return this.http.get(this.urlAPI + `tracks/${trackUri}`, { headers: this.setHeaders(accessToken) })
  }

  getPlaylistTracks(accessToken: string, playlistId: string) {
    return this.http.get(this.urlAPI + `playlists/${playlistId}/tracks?market=HU`, { headers: this.setHeaders(accessToken) })
  }

  getDeviceId(accessToken: string) {
    return this.http.get(this.urlMYAPI + "player/devices", { headers: this.setHeaders(accessToken) })
  }

  addToQueue(accessToken: string, trackId: string, deviceId: string) {
    return this.http.post(this.urlMYAPI + `player/queue?uri=${trackId}&device_id=${deviceId}`, null, { headers: this.setHeaders(accessToken) })
  }

  next(accessToken: string) {
    return this.http.post(this.urlMYAPI + "player/next", null, { headers: this.setHeaders(accessToken) })
  }

  play(accessToken: string) {
    return this.http.put(this.urlMYAPI + "player/play", null, { headers: this.setHeaders(accessToken) })
  }

  pause(accessToken: string) {
    return this.http.put(this.urlMYAPI + "player/pause", null, { headers: this.setHeaders(accessToken) })
  }
}

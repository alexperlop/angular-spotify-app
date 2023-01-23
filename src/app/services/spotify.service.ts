import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getToken() {
    const url = 'https://accounts.spotify.com/api/token';
    this.http.post(url, {
      grant_type: 'client_credentials',
      client_id: 'xxxxxxxxx',
      client_secret: 'xxxxxxxxx',
    });
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer xxxxxxxxxx',
    });
    return this.http.get(url, {
      headers,
    });
  }

  getNewRelease() {
    return this.getQuery(`browse/new-releases`).pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }

  getArtists(termn: string) {
    return this.getQuery(`search?q=${termn}&type=artist&limit=15`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => {
        return data.tracks;
      })
    );
  }
}

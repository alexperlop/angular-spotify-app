import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  public artist: any = {};
  public topTracks: any[] = [];
  public show: boolean = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.activateRoute.params.subscribe((params) => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtist(id: string) {
    this.show = true;
    this.spotifyService.getArtist(id).subscribe((artistSelected: any) => {
      this.show = false;
      this.artist = artistSelected;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe((topTracks) => {
      this.topTracks = topTracks;
    });
  }
}

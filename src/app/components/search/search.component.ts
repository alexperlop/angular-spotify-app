import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public artists: any[] = [];
  public show!: boolean;
  constructor(private spotify_service: SpotifyService) {}

  search(termn: string) {
    this.show = true;
    if (termn.trim() === '' || termn === undefined || termn === null) {
      this.show = false;
      return;
    } else {
      this.spotify_service.getArtists(termn).subscribe((data: any) => {
        this.artists = data;
        this.show = false;
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public newReleases: any[] = [];
  public show: boolean;
  public error: boolean = false;
  public errorMsg: string = '';

  constructor(private spotify: SpotifyService) {
    this.show = true;
    this.spotify.getToken();
    this.spotify.getNewRelease().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.show = false;
      },
      (err) => {
        this.error = true;
        this.show = false;
        this.errorMsg = err.error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}

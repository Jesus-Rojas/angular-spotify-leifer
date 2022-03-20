import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg',
    album: 'Angular',
    name: 'Prueba',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {
  }

}

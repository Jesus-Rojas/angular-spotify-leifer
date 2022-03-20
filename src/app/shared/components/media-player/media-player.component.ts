import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://www.ngenespanol.com/wp-content/uploads/2018/08/La-primera-imagen-de-la-historia.jpg',
    album: 'Angular',
    name: 'Prueba',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
  listObservers$: Subscription[] = []
  state: string = 'paused'

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback
      .subscribe((res: TrackModel) => {
        console.log(res)
      })
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( observer => {
      observer.unsubscribe()
    })
  }
}

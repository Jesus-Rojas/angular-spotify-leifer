import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending : TrackModel[]  = []
  tracksRandom : TrackModel[]  = []
  listObservers$: Subscription[] = []

  constructor(private trackService: TrackService) { }

  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe())
  }

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$
      .subscribe( res => {
        this.tracksTrending = res;
        this.tracksRandom = res;
    })
    const observer2$ = this.trackService.dataTracksRandom$
      .subscribe( res => {
        this.tracksRandom = [...this.tracksRandom, ...res];
    })
    this.listObservers$ = [observer1$, observer2$]
  }

}

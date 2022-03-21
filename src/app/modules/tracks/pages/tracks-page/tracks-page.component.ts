import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  tracksTrending : TrackModel[]  = []
  tracksRandom : TrackModel[]  = []
  listObservers$: Subscription[] = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    // this.loadDataAll() //TODO 📌📌
    this.trackService.getAllTracks$()
      .subscribe( res => {
        this.tracksTrending = res
      })
    // this.loadDataRandom() //TODO 📌📌
  }

  async loadDataAll(): Promise<any> {
    // this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
      .subscribe((response: TrackModel[]) => {
        this.tracksRandom = response
      })
  }

}

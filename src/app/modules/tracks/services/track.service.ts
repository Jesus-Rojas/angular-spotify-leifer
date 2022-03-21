import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '@data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([])
  dataTracksRandom$: Observable<TrackModel[]> = of([])

  constructor() { 
    const { data }: any = (dataRaw as any).default
    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observer) => {
      const newTrack:TrackModel = {
        _id: 1,
        album: 'Red Vol.1',
        cover: 'El retorno del Fenix',
        name: 'Santa Flow',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTVU-xvBx9ZBQ_HwVPOwwFipP3FGcaojo3Q&usqp=CAU'
      }
      setTimeout(() => {
        observer.next([newTrack])
      }, 3500);
    })
  }
}

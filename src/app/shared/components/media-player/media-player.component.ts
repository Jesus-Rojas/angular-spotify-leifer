import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Subscription[] = []
  state: string = 'paused'

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.trackInfo$
      .subscribe(status => this.state = status)
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach( observer => {
      observer.unsubscribe()
    })
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX)

  }
}

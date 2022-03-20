import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerComponent } from './card-player/card-player.component';
import { MediaPlayerComponent } from './media-player/media-player.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { PlayListBodyComponent } from './play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './play-list-header/play-list-header.component';
import { SectionGenericComponent } from './section-generic/section-generic.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    CardPlayerComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

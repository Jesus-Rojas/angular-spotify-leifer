import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    CardPlayerComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
    OrderListPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardPlayerComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    SectionGenericComponent,
    SideBarComponent,
    OrderListPipe,
    ImgBrokenDirective
  ]
})
export class SharedModule { }

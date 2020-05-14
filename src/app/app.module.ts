import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { MusiciansComponent } from './musicians/musicians.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    PlaylistsComponent,
    MusiciansComponent,
    CalendarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgPipesModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'playlists', component: PlaylistsComponent },
      { path: 'musicians', component: MusiciansComponent },
      { path: 'calendar', component: CalendarComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

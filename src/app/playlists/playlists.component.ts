import { Component, OnInit } from '@angular/core';
import { playlists } from '../playlists';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlists = playlists;
  toArray(answers: object) {
    return Object.keys(answers).map(key => answers[key])
  };

  constructor() { }

  ngOnInit(): void {
  }

}

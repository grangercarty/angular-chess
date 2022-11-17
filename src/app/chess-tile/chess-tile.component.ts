import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-tile',
  templateUrl: './chess-tile.component.html',
  styleUrls: ['./chess-tile.component.css']
})
export class ChessTileComponent implements OnInit {

  x = 1;
  y = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

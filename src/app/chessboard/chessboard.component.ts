import { Component, OnInit } from '@angular/core';
import { ChessTile } from 'src/app/models/ChessTile';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  chessBoard!: ChessTile[][];
  selectedTile?: ChessTile;

  onSelect(tile: ChessTile): void {
    this.selectedTile = tile;
  }

  getHorizontalShift(tile: ChessTile): string {
    return `${tile.x*50}px`;
  }

  getVerticalShift(tile: ChessTile): string {
    return `${tile.y*50}px`;
  }

  buildBoard(): void {
    this.chessBoard = [];
    let y=1;
    for (y; y<9; y++) {
      var tileRow: ChessTile[] = [];
      let x=1;
      for (x; x<9; x++) {
        tileRow.push({x:x, y:y});
      }
      this.chessBoard.push(tileRow);
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.buildBoard();
  }

}

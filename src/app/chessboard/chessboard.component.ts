import { Component, OnInit } from '@angular/core';
import { ChessTile } from 'src/app/models/ChessTile';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  chessBoard!: ChessTile[];

  buildBoard(): void {
    this.chessBoard = [];
    let x=1;
    for (x; x<9; x++) {
      let y=1;
      for (y; y<9; y++) {
        this.chessBoard.push({x:x, y:y});
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.buildBoard();
  }

}

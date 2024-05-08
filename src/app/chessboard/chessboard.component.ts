import { Component, OnInit } from '@angular/core';
import { ChessTile } from 'src/app/models/ChessTile';
import { MoveFinderService } from '../services/move-finder.service';
import { ChessPiece } from '../models/ChessPiece';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

  chessBoard!: ChessTile[][];
  selectedTile?: ChessTile;
  selectedPieceMoves!: ChessTile[];
  allPieces!: ChessPiece[];
  colorToMove = "White";

  onSelect(tile: ChessTile): void {
    if (this.selectedPieceMoves.indexOf(tile)>-1 && this.selectedTile && this.selectedTile.piece) {
      this.selectedTile.piece.moved = true;
      tile.piece = this.selectedTile.piece;
      this.selectedTile.piece = undefined;
      this.selectedTile = undefined;
      this.resetPieceMoves();
      this.changeColorToMove();
    }
    else if (tile === this.selectedTile) {
      this.selectedTile = undefined;
      this.resetPieceMoves();
    }
    else {
      this.selectedTile = tile;
      this.resetPieceMoves;
      if (tile.piece?.color === this.colorToMove) {
        this.selectedPieceMoves = this.moveFinder.findMoves(tile, this);
      }
    }
  }

  getHorizontalShift(tile: ChessTile): string {
    return `${tile.x*50}px`;
  }

  getVerticalShift(tile: ChessTile): string {
    return `${tile.y*50}px`;
  }

  getChessPiece(tile: ChessTile): string {
    if (tile.piece) {
      return `${tile.piece.color}\n${tile.piece.type}`;
    }
    else {return "";}
  }

  buildBoard(): void {
    this.chessBoard = [];
    let x=0;
    for (x; x<8; x++) {
      let tileRow: ChessTile[] = [];
      let y=0;
      for (y; y<8; y++) {
        tileRow.push({x:x, y:y});
      }
      this.chessBoard.push(tileRow);
    }
  }

  resetPieceMoves(): void {
    this.selectedPieceMoves = [];
  }

  getTile(x:number, y:number): ChessTile {
    return this.chessBoard[x][y];
  }

  changeColorToMove(): void {
    if (this.colorToMove === "White") {
      this.colorToMove = "Black";
    }
    else {
      this.colorToMove = "White";
    }
  }

  newGame(): void {
    this.allPieces = [];
    let x=0;
    let currentTile = this.getTile(0,0);
    for (x; x<8; x++) {
      currentTile = this.getTile(x,1)
      currentTile.piece = {type: "Pawn", color: "Black", moved: false, location: currentTile, legalMoves: []};
      this.allPieces.push(currentTile.piece);
    }
    x=0;
    for (x; x<8; x++) {
      currentTile = this.getTile(x,6)
      currentTile.piece = {type: "Pawn", color: "White", moved: false, location: currentTile, legalMoves: []};
      this.allPieces.push(currentTile.piece);
    }
    currentTile = this.getTile(0,0);
    currentTile.piece = {type: "Rook", color: "Black", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(1,0);
    currentTile.piece = {type: "Knight", color: "Black", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(2,0);
    currentTile.piece = {type: "Bishop", color: "Black", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(3,0);
    currentTile.piece = {type: "Queen", color: "Black", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(7,0);
    currentTile.piece = {type: "Rook", color: "Black", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(6,0);
    currentTile.piece = {type: "Knight", color: "Black", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(5,0);
    currentTile.piece = {type: "Bishop", color: "Black", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(4,0);
    currentTile.piece = {type: "King", color: "Black", moved: false, location: currentTile, legalMoves: []};
    x=0;
    for (x; x<8; x++) {
      currentTile = this.getTile(x,0);
      if (currentTile.piece) {
        this.allPieces.push(currentTile.piece);
      }
    }
    currentTile = this.getTile(0,7);
    currentTile.piece = {type: "Rook", color: "White", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(1,7);
    currentTile.piece = {type: "Knight", color: "White", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(2,7);
    currentTile.piece = {type: "Bishop", color: "White", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(3,7);
    currentTile.piece = {type: "Queen", color: "White", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(7,7);
    currentTile.piece = {type: "Rook", color: "White", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(6,7);
    currentTile.piece = {type: "Knight", color: "White", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(5,7);
    currentTile.piece = {type: "Bishop", color: "White", moved: false, location: currentTile, legalMoves: []};
    currentTile = this.getTile(4,7);
    currentTile.piece = {type: "King", color: "White", moved: false, location: currentTile, legalMoves: []};
    x=0;
    for (x; x<8; x++) {
      currentTile = this.getTile(x,7);
      if (currentTile.piece) {
        this.allPieces.push(currentTile.piece);
      }
    }
  }

  findAllMoves(): void {

  }

  constructor(private moveFinder: MoveFinderService) { }

  ngOnInit(): void {
    this.buildBoard();
    this.resetPieceMoves();
    this.newGame()
  }

}

import { Injectable } from '@angular/core';
import { ChessTile } from 'src/app/models/ChessTile';
import { ChessboardComponent } from 'src/app/chessboard/chessboard.component';

@Injectable({
  providedIn: 'root'
})
export class MoveFinderService {
  
  findMoves(tile: ChessTile, board: ChessboardComponent): ChessTile[] {
    if (tile.piece?.type === "King") {
      return this.findKingMoves(tile, board);
    }
    else if (tile.piece?.type === "Knight") {
      return this.findKnightMoves(tile, board);
    }
    else if (tile.piece?.type === "Bishop") {
      return this.findBishopMoves(tile, board);
    }
    else {
      return [];
    }
  }

  findBishopMoves(tile:ChessTile, board: ChessboardComponent): ChessTile[] {
    let moves: ChessTile[] = [];
    let moveLength = 1;
    while (this.legalSquare(tile.x+moveLength, tile.y+moveLength)) {
      moves.push(board.getTile(tile.x+moveLength, tile.y+moveLength))
      moveLength++;
    }
    moveLength = 1;
    while (this.legalSquare(tile.x-moveLength, tile.y+moveLength)) {
      moves.push(board.getTile(tile.x-moveLength, tile.y+moveLength))
      moveLength++;
    }
    moveLength = 1;
    while (this.legalSquare(tile.x+moveLength, tile.y-moveLength)) {
      moves.push(board.getTile(tile.x+moveLength, tile.y-moveLength))
      moveLength++;
    }
    moveLength = 1;
    while (this.legalSquare(tile.x-moveLength, tile.y-moveLength)) {
      moves.push(board.getTile(tile.x-moveLength, tile.y-moveLength))
      moveLength++;
    }
    return moves;
  }

  findKnightMoves(tile:ChessTile, board: ChessboardComponent): ChessTile[] {
    let moves: ChessTile[] = [];
    let horizontalMovement = 1;
    for (horizontalMovement; horizontalMovement<3; horizontalMovement++) {
      let verticalMovement = 3-horizontalMovement;
      if (this.legalSquare(tile.x-horizontalMovement, tile.y-verticalMovement)) {
        moves.push(board.getTile(tile.x-horizontalMovement, tile.y-verticalMovement));
      }
      if (this.legalSquare(tile.x+horizontalMovement, tile.y-verticalMovement)) {
        moves.push(board.getTile(tile.x+horizontalMovement, tile.y-verticalMovement));
      }
      if (this.legalSquare(tile.x-horizontalMovement, tile.y+verticalMovement)) {
        moves.push(board.getTile(tile.x-horizontalMovement, tile.y+verticalMovement));
      }
      if (this.legalSquare(tile.x+horizontalMovement, tile.y+verticalMovement)) {
        moves.push(board.getTile(tile.x+horizontalMovement, tile.y+verticalMovement));
      }
    }
    return moves;
  }

  findKingMoves(tile: ChessTile, board: ChessboardComponent): ChessTile[] {
    let moves: ChessTile[] = [];
    let x=tile.x-1;
    for (x; x<tile.x+2; x++) {
      let y=tile.y-1;
      for (y; y<tile.y+2; y++) {
        if ( (tile.x != x || tile.y != y) && this.legalSquare(x,y) ) {
          moves.push(board.getTile(x,y));
        }
      }
    }
    return moves;
  }

  legalSquare(x:number, y:number): boolean {
    return ( (x>-1 && x<8) && (y>-1 && y<8) );
  }

  constructor() { }
}

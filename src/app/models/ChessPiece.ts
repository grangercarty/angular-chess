import { ChessTile } from "./ChessTile";

export interface ChessPiece {
    type: string;
    color: string;
    moved: boolean;
    location?: ChessTile;
    legalMoves?: ChessTile[];
}

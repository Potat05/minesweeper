
import { EventDispatcher } from "./eventDispatcher";



export enum TileState {
    Covered = 1,
    Open = 2,
    Flagged = 3
}



export class Tile {

    public readonly board: Board;

    public readonly x: number;
    public readonly y: number;
    public isMine: boolean = false;
    public state: TileState = TileState.Covered;

    public static searchPattern: { x: number, y: number }[] = [
        { x: -1, y: -1 },
        { x: 0, y: -1 },
        { x: 1, y: -1 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
        { x: -1, y: 1 },
        { x: -1, y: 0 }
    ];

    public open(): void {
        if(this.state == TileState.Open) {

            const flagsNearby = Tile.searchPattern.reduce((count, offset) => {
                const x = this.x + offset.x;
                const y = this.y + offset.y;
                if(!this.board.containsPoint(x, y)) return count;
                return (this.board.getTile(x, y).state == TileState.Flagged) ? ++count : count;
            }, 0);

            if(flagsNearby == this.minesNearby) {

                Tile.searchPattern.forEach(offset => {
                    const x = this.x + offset.x;
                    const y = this.y + offset.y;
                    if(!this.board.containsPoint(x, y)) return;
                    const tile = this.board.getTile(x, y);
                    if(tile.state == TileState.Covered) tile.open();
                });

            }

            return;
        }
        if(this.state == TileState.Flagged) return;

        this.state = TileState.Open;

        this.board.game.dispatchEvent('open', this);

        if(this.minesNearby == 0) {
            Tile.searchPattern.forEach(offset => {
                const x = this.x + offset.x;
                const y = this.y + offset.y;
                if(!this.board.containsPoint(x, y)) return;
                this.board.getTile(x, y).open();
            });
        }

        if(this.isMine) {
            this.board.game.dispatchEvent('lose', this);
        }

    }

    public get minesNearby(): number {
        return Tile.searchPattern.reduce((count, offset) => {
            const x = this.x + offset.x;
            const y = this.y + offset.y;
            if(!this.board.containsPoint(x, y)) return count;
            return this.board.getTile(x, y).isMine ? ++count : count;
        }, 0);
    }

    constructor(board: Board, x: number, y: number) {
        this.board = board;

        this.x = x;
        this.y = y;
    }

}



export class Board {

    public readonly game: MineSweeper;

    public readonly width: number = 0;
    public readonly height: number = 0;

    public tiles: Tile[] = [];

    private tileIndex(x: number, y: number): number {
        if(!this.containsPoint(x, y)) {
            throw new Error('Cannot index tile outside of board.');
        }
        return x + y * this.width;
    }

    private initializeEmptyBoard() {
        this.tiles = new Array(this.width * this.height);

        for(let x = 0; x < this.width; x++) {
            for(let y = 0; y < this.height; y++) {
                const ind = this.tileIndex(x, y);
                this.tiles[ind] = new Tile(this, x, y);
            }
        }
    }


    public containsPoint(x: number, y: number): boolean {
        return !(x < 0 || x >= this.width || y < 0 || y >= this.height);
    }

    public getTile(x: number, y: number): Tile {
        const ind = this.tileIndex(x, y);
        return this.tiles[ind];
    }



    constructor(game: MineSweeper, width: number, height: number, numMines: number) {
        this.game = game;

        this.width = width;
        this.height = height;

        this.initializeEmptyBoard();

        const validMinePlacements = [ ...this.tiles ];

        for(let i = 0; i < numMines; i++) {
            const ind = Math.floor(Math.random() * validMinePlacements.length);
            const tile = validMinePlacements.splice(ind, 1)[0];
            tile.isMine = true;
        }

    }

}



export class MineSweeper extends EventDispatcher<{
    /**
     * @param tile - The tile that was opened.  
     */
    'open': (tile: Tile) => void;
    /**
     * @param tile - The tile that caused the loss.  
     */
    'lose': (tile: Tile) => void;
}> {

    public readonly board: Board;

    public get width(): number {
        return this.board.width;
    }
    public get height(): number {
        return this.board.height;
    }
    public get tiles(): Tile[] {
        return this.board.tiles;
    }

    constructor(width: number, height: number, numMines: number) {
        super();

        this.board = new Board(this, width, height, numMines);
    }

}



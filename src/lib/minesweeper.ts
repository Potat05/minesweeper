import { EventDispatcher } from "./EventDispatcher";



interface Tile {
    x: number;
    y: number;
    isMine: boolean;
    minesNearby: number;
    state: 'covered' | 'uncovered' | 'flagged';
}

export class Minesweeper extends EventDispatcher<{
    'update': (x: number, y: number, game: Minesweeper) => void;
}> {

    private _state: 'playing' | 'lost' | 'won' = 'playing';
    public get state(): 'playing' | 'lost' | 'won' {
        return this._state;
    }

    public readonly width: number;
    public readonly height: number;
    public readonly tiles: Tile[];

    constructor(width: number, height: number, mines: boolean[]) {
        super();

        this.width = width;
        this.height = height;

        if(mines.length != this.width * this.height) {
            throw new Error('Invalid size.');
        }

        this.tiles = mines.map((isMine, i) => ({
            x: i % width,
            y: Math.floor(i / width),
            isMine,
            minesNearby: -1,
            state: 'covered'
        }));

        for(let x = 0; x < width; x++) {
            for(let y = 0; y < height; y++) {
                const tile = this.get(x, y);

                tile.minesNearby = this.tilesPattern(x, y).reduce((count, tile) => tile.isMine ? (count + 1) : count, 0);
            }
        }

    }

    public isValidPos(x: number, y: number): boolean {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    public throwInvalidPos(x: number, y: number): void {
        if(!this.isValidPos(x, y)) {
            throw new Error('Invalid board position.');
        }
    }

    public get(x: number, y: number): Tile {
        return this.tiles[x + y * this.width];
    }

    public readonly PATTERN: { x: number, y: number }[] = [
        { x: -1, y: -1 },
        { x: 0, y: -1 },
        { x: 1, y: -1 },
        { x: 1, y: 0 },
        { x: 1, y: 1 },
        { x: 0, y: 1 },
        { x: -1, y: 1 },
        { x: -1, y: 0 }
    ];
    public tilesPattern(x: number, y: number): Tile[] {
        let tiles: Tile[] = [];
        for(const d of this.PATTERN) {
            if(this.isValidPos(x + d.x, y + d.y)) {
                tiles.push(this.get(x + d.x, y + d.y));
            }
        }
        return tiles;
    }



    public toggleFlag(x: number, y: number): void {
        const tile = this.get(x, y);

        if(tile.state == 'uncovered') return;

        tile.state = tile.state == 'covered' ? 'flagged' : 'covered';

        if(this.tiles.every(tile => tile.isMine ? tile.state == 'flagged' : true)) {
            this._state = 'won';
        }

        this.dispatchEvent('update', x, y, this);

    }

    public uncover(x: number, y: number): void {
        const tile = this.get(x, y);

        if(tile.state != 'covered') return;

        if(tile.isMine) {
            this._state = 'lost';
        }

        tile.state = 'uncovered';

        this.dispatchEvent('update', x, y, this);

    }



    public static generate(options: {
        width: number;
        height: number;
        numMines: number;
        forceZeroAtPos?: {
            x: number;
            y: number;
        };
    }): Minesweeper {

        const width = options.width;
        const height = options.height;
        const numMines = options.numMines;
        const forceZeroAtPos = options.forceZeroAtPos;

        while(true) {

            // Generate mines
            let mines: boolean[] = new Array(width * height).fill(false);
            let validPositions = mines.map((_, i) => i);
            for(let i = 0; i < numMines; i++) {
                const rng = Math.floor(Math.random() * validPositions.length);
                const ind = validPositions.splice(rng, 1)[0]!;
                mines[ind] = true;
            }

            const game = new Minesweeper(width, height, mines);

            // If the mine that is selected to be empty has mine, remake board.
            if(forceZeroAtPos) {
                if(game.get(forceZeroAtPos.x, forceZeroAtPos.y).minesNearby > 0) {
                    continue;
                }
            }

            // Check if board is solvable without guessing.
            // TODO

            return game;

        }
    }

}



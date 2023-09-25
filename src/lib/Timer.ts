
import { EventDispatcher } from "./EventDispatcher";



export class Timer extends EventDispatcher<{
    'tick': (timeSinceStartMs: number) => void;
    'error': (timeSinceStartMs: number, driftError: number) => void;
}> {

    public readonly interval: number;

    private _running: boolean = false;
    public get running(): boolean {
        return this._running;
    }

    private _startDate: number = -1;
    public get startDate(): number {
        return this._startDate;
    }

    private timeout: number = -1;

    private expected: number = -1;



    constructor(interval: number) {
        super();
        this.interval = interval;
    }



    private step(): void {
        const date = Date.now();

        const drift = date - this.expected;

        const timeSinceStart = date - this._startDate;

        if(drift > this.interval) {
            this.dispatchEvent('error', timeSinceStart, drift);
        }

        this.dispatchEvent('tick', timeSinceStart);

        this.expected += this.interval;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.step(), Math.max(0, this.interval - drift));
    }

    public start(): void {
        if(this._running) return;
        this._running = true;

        this._startDate = Date.now();
        this.expected = this._startDate + this.interval;
        this.timeout = setTimeout(() => this.step(), this.interval);
    }

    public stop(): void {
        if(!this._running) return;
        this._running = false;

        this._startDate = -1;

        clearTimeout(this.timeout);
    }

}



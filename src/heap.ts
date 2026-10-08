export class Heap<T> {
    protected items: T[] = [];
    protected compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number = (a, b) => (a as any) - (b as any)) {
        this.compare = compare;
    }

    size(): number {
        return this.items.length;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    peek(): T | undefined {
        return this.items[0];
    }

    push(value: T): void {
        this.items.push(value);
        this.siftUp(this.items.length - 1);
    }

    pop(): T | undefined {
        if (this.items.length === 0) return undefined;
        if (this.items.length === 1) return this.items.pop();

        const root = this.items[0];
        this.items[0] = this.items.pop()!;
        this.siftDown(0);
        return root;
    }

    protected siftUp(index: number): void {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.compare(this.items[index], this.items[parent]) <= 0) break;

            [this.items[index], this.items[parent]] = [this.items[parent], this.items[index]];
            index = parent;
        }
    }

    protected siftDown(index: number): void {
        const n = this.items.length;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            let largest = index;

            if (left < n && this.compare(this.items[left], this.items[largest]) > 0) {
                largest = left;
            }
            if (right < n && this.compare(this.items[right], this.items[largest]) > 0) {
                largest = right;
            }
            if (largest === index) break;

            [this.items[index], this.items[largest]] = [this.items[largest], this.items[index]];
            index = largest;
        }
    }

    toArray(): T[] {
        return [...this.items];
    }
}

export class MinHeap extends Heap<number> {
    constructor() {
        super((a, b) => b - a);
    }
}

export class MaxHeap extends Heap<number> {
    constructor() {
        super((a, b) => a - b);
    }
}
import { Heap } from "./heap";

export interface PQItem<T> {
    value: T;
    priority: number;
}

export class PriorityQueue<T> {
    private heap: Heap<PQItem<T>>;

    constructor() {
        this.heap = new Heap<PQItem<T>>((a, b) => b.priority - a.priority);
    }

    enqueue(value: T, priority: number): void {
        this.heap.push({ value, priority });
    }

    dequeue(): T | undefined {
        return this.heap.pop()?.value;
    }

    peek(): T | undefined {
        return this.heap.peek()?.value;
    }

    size(): number {
        return this.heap.size();
    }

    isEmpty(): boolean {
        return this.heap.isEmpty();
    }
}
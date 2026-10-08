import { MinHeap, MaxHeap } from "./heap";

export function topKLargest(arr: number[], k: number): number[] {
    if (k <= 0) return [];
    if (k >= arr.length) return [...arr].sort((a, b) => b - a);

    const heap = new MinHeap();

    for (const x of arr) {
        if (heap.size() < k) {
            heap.push(x);
        } else if (x > heap.peek()!) {
            heap.pop();
            heap.push(x);
        }
    }

    const result: number[] = [];
    while (!heap.isEmpty()) {
        result.push(heap.pop()!);
    }
    return result.reverse();
}

export function topKSmallest(arr: number[], k: number): number[] {
    if (k <= 0) return [];
    if (k >= arr.length) return [...arr].sort((a, b) => a - b);

    const heap = new MaxHeap();

    for (const x of arr) {
        if (heap.size() < k) {
            heap.push(x);
        } else if (x < heap.peek()!) {
            heap.pop();
            heap.push(x);
        }
    }

    const result: number[] = [];
    while (!heap.isEmpty()) {
        result.push(heap.pop()!);
    }
    return result.reverse();
}
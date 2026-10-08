export function heapSort(arr: number[]): number[] {
    const a = [...arr];
    const n = a.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        siftDown(a, i, n);
    }

    for (let end = n - 1; end > 0; end--) {
        [a[0], a[end]] = [a[end], a[0]];
        siftDown(a, 0, end);
    }

    return a;
}

function siftDown(a: number[], index: number, heapSize: number): void {
    while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;

        if (left < heapSize && a[left] > a[largest]) largest = left;
        if (right < heapSize && a[right] > a[largest]) largest = right;
        if (largest === index) break;

        [a[index], a[largest]] = [a[largest], a[index]];
        index = largest;
    }
}
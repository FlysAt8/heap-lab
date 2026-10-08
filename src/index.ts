import { MinHeap, MaxHeap } from "./heap";
import { heapSort } from "./heapSort";
import { topKLargest, topKSmallest } from "./topK";
import { PriorityQueue }from "./priorityQueue"

const maxH = new MaxHeap();
[3, 5, 1, 10, 8, 7].forEach(x => maxH.push(x));
console.log("Max peek:", maxH.peek());
console.log("Max pop: ", maxH.pop());

const minH = new MinHeap();
[3, 5, 1, 10, 8, 7].forEach(x => minH.push(x));
console.log("Min peek:", minH.peek());
console.log("Min pop: ", minH.pop());

const arr = [5, 2, 9, 1, 5, 6, 3, 8, 4, 7];
console.log("Исходный:   ", arr);
console.log("Отсортирован:", heapSort(arr));

console.log("\nТop-K сверху");
console.log("Массив:", arr);
console.log("Top-3: ", topKLargest(arr, 3));
console.log("Top-1: ", topKLargest(arr, 1));

console.log("\nТop-K снизу");
console.log("Массив:", arr);
console.log("Top-3: ", topKSmallest(arr, 3));
console.log("Top-1: ", topKSmallest(arr, 1));

console.log("\nПриоритеты");
const pq = new PriorityQueue<string>();
pq.enqueue("обычное письмо", 5);
pq.enqueue("срочный отчёт", 1);
pq.enqueue("срочный звонок", 2);
pq.enqueue("планёрка", 3);

console.log("peek:", pq.peek());
console.log("size:", pq.size());

console.log("dequeue:", pq.dequeue());
console.log("dequeue:", pq.dequeue());
console.log("dequeue:", pq.dequeue());
console.log("dequeue:", pq.dequeue());
console.log("dequeue:", pq.dequeue());
console.log("isEmpty:", pq.isEmpty());
const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize ? maxSize : 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if(this.heap.heapSize >= this.maxSize) throw ("Max size reached");
		this.heap.push(data, priority);
	}

	shift() {
		if(this.isEmpty()) throw ("Queue is empty");
		this.heap.pop();
	}

	size() {
		return this.heap.heapSize;
	}

	isEmpty() {
		return this.heap.heapSize === 0 ? true : false;
	}
}

module.exports = PriorityQueue;

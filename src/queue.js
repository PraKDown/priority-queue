const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize == undefined )  {
			this.maxSize = 30;
		}
		else {
			this.maxSize = maxSize;
		}
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.size() >= this.maxSize) {
			throw "error";
		}
		this.heap.push(data, priority);
	}

	shift() {
		if (this.heap.isEmpty()) {
			throw "error";
		}
		return this.heap.pop;
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;

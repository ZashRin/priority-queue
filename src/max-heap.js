const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		let newNode = new Node(data, priority);
		this.insertNode(newNode);
		this.shiftNodeUp(newNode);
	}

	pop() {
		if(this.isEmpty()) return;
		this.heapSize--;
		const pRoot = this.detachRoot();
	}

	detachRoot() {
		const detach = this.root;
		this.root = null;
		return detach;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		return this.heapSize === 0 ? true : false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	insertNode(node) {
		if(this.isEmpty()) {
			this.root = node;
			this.parentNodes.push(node);
			this.heapSize++;
			return;
		}
		if(this.parentNodes[0].right !== null) this.parentNodes.shift();
		this.parentNodes[0].appendChild(node);
		this.parentNodes.push(node);
		this.heapSize++;

	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

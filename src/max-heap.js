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
		this.parentNodes[0].appendChild(node);
		this.parentNodes.push(node);
		if(this.parentNodes[0].right !== null) this.parentNodes.shift();
		this.heapSize++;

	}

	shiftNodeUp(node) {
		if(node.parent) {
			if(node.parent.priority < node.priority) {
				if(node.right) this.parentNodes.splice[this.parentNodes.indexOf(node), 1, node.parent];
				else this.parentNodes.splice[this.parentNodes.indexOf(node), 0, node.parent];
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		} else {
			this.parentNodes.splice[this.parentNodes.indexOf(node), 1, this.root];
			this.root = node;
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

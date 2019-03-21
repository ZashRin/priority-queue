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
		this.parentNodes.splice(this.parentNodes.indexOf(detach), 1);
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
				if(node.right === null) {
					if(node.parent.right) this.parentNodes[this.parentNodes.indexOf(node)] = node.parent;
					else {
						let temp = this.parentNodes[this.parentNodes.indexOf(node)];
						this.parentNodes[this.parentNodes.indexOf(node)] = this.parentNodes[this.parentNodes.indexOf(node.parent)];
						this.parentNodes[this.parentNodes.indexOf(node.parent)] = temp;
					}
				}
				else if(this.parentNodes.indexOf(node) > -1) this.parentNodes.splice[this.parentNodes.indexOf(node), 1];
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		} else {
			this.root = node;
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

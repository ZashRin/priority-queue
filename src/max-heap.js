const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
		this.order = [];
	}

	push(data, priority) {
		let newNode = new Node(data, priority);
		this.order.push(newNode);
		this.insertNode(newNode);
		this.shiftNodeUp(newNode);
	}

	pop() {
		if(this.isEmpty()) return;
		this.heapSize--;
		const detached = this.detachRoot();
		this.order.splice(this.order.indexOf(detached), 1);
		/*this.restoreRootFromLastInsertedNode(detached);
		this.shiftNodeDown(this.root);
		return this.root.data;*/
	}

	detachRoot() {
		const detach = this.root;
		this.root = null;
		if(this.parentNodes.indexOf(detach) > -1)
			this.parentNodes.splice(this.parentNodes.indexOf(detach), 1);
		return detach;
	}

	restoreRootFromLastInsertedNode(detached) {
		this.root = this.order.pop();
		this.parentNodes.splice(this.parentNodes.indexOf(this.root), 1);
		if(detached.left !== this.root)
			this.root.appendChild(detached.left);
		if(detached.right !== this.root)
			this.root.appendChild(detached.right);
		if(this.root.right === null) this.parentNodes.unshift(this.root);
		if(this.root.parent != detached) {
			if(this.root.parent.right === this.root) {
			this.parentNodes.unshift(this.root.parent);
			this.root.parent.right = null;
			} else this.root.parent.left = null;
		}
		this.root.parent = null;
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
		this.order = [];
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
				const nodeInd = this.parentNodes.indexOf(node);
				const npInd = this.parentNodes.indexOf(node.parent);
				if(node.right === null) {
					if(node.parent.right) this.parentNodes[nodeInd] = node.parent;
					else {
						const temp = this.parentNodes[nodeInd];
						this.parentNodes[nodeInd] = this.parentNodes[npInd];
						this.parentNodes[npInd] = temp;
					}
				}
				else if(nodeInd > -1) this.parentNodes.splice[nodeInd, 1];
				node.swapWithParent();
				this.shiftNodeUp(node);
			}
		} else {
			this.root = node;
		}
	}

	shiftNodeDown(node) {
		let swap;
		if (node.left && node.right &&
			node.left.priority > node.right.priority &&
			node.left.priority >= node.priority){
				swap = node.left;
		} else if (node.left && node.right &&
			node.left.priority <= node.right.priority &&
			node.right.priority >= node.priority) {
				swap = node.right;
		} else if (node.left && node.left.priority >= node.priority) {
			swap = node.left;
		} else return;
		const nodeInd = this.parentNodes.indexOf(node);
		const swapInd = this.parentNodes.indexOf(swap);
		if(swapInd !== -1) {
			if(nodeInd !== -1) {
				const temp = this.parentNodes[nodeInd];
				this.parentNodes[nodeInd] = this.parentNodes[swapInd];
				this.parentNodes[swapInd] = temp;
			} else {
				this.parentNodes[swapInd] = node;
			}
		}
		if(node === this.root) this.root = swap;
		swap.swapWithParent();
		this.shiftNodeDown(node);
	}
}

module.exports = MaxHeap;

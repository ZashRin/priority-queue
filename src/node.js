class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	appendChild(node) {
		if(this.left !== null) {
			if(this.right !== null) return;
			this.right = node;
			node.parent = this;
			return;
		}
		this.left = node;
		node.parent = this;
	}

	removeChild(node) {
		if(node === this.left) {
			node.parent = null;
			this.left = null;
			return;
		}
		if(node === this.right) {
			node.parent = null;
			this.right = null;
			return;
		}
		else throw('er');
	}

	remove() {
		if(this.parent === null) return;
		this.parent.removeChild(this);
	}

	swapWithParent() {
		if(this.parent === null) return this;
		let temp;
		if(this.parent.parent !== null) {
			if(this.parent.parent.left === this.parent) {
				this.parent.parent.left = this;
			} else {
				this.parent.parent.right = this;
			}
		}
		if (this.left !== null) {
			this.left.parent = this.parent;
		 }
		if (this.right !== null) {
			this.right.parent = this.parent;
		}
		if(this.parent.left === this) {
			if(this.parent.right !== null) {
				this.parent.right.parent = this;
			}
			temp = this.left;
			this.left = this.parent;
			this.parent.left = temp;
			temp = this.right;
			this.right = this.parent.right;
			this.parent.right = temp;
		} else {
			if (this.parent.left !== null) {
			  	this.parent.left.parent = this;
			}
			temp = this.left;
			this.left = this.parent.left;
			this.parent.left = temp;
			temp = this.right;
			this.right = this.parent;
			this.parent.right = temp;
		}
		temp = this.parent.parent;
		this.parent.parent = this;
		this.parent = temp;
	}
}

module.exports = Node;

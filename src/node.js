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
		if(this.parent === null) return;
		if(this.parent.parent !== null) {
			if(this.parent.parent.left === this.parent) {
				this.parent.parent.left = this;
			} else {
				this.parent.parent.right = this;
			}
			if(this.parent.left === this) {
				if(this.right === null && this.parent.right !== null) {
					this.parent.right.parent = this;
					this.right = this.parent.right;
					this.parent.right = null;
				}
				this.parent.left = this.left;
				this.left = this.parent;
			} else {
				let templ = this.left;
				this.left = this.parent.left;
				this.left.parent = this;
				this.parent.left = templ;
				this.parent.left.parent = this.parent;
				this.parent.right = this.right;
				this.right = this.parent;
			}
			let temp = this.parent;
			this.parent = this.parent.parent;
			temp.parent = this;
		} else {
			if(this.parent.left === this) {
				if(this.right === null && this.parent.right !== null) {
					this.parent.right.parent = this;
					this.right = this.parent.right;
					this.parent.right = null;
				}
				this.parent.left = this.left;
				this.left = this.parent;
			} else {
				let templ = this.left;
				this.left = this.parent.left;
				this.parent.left = templ;
				this.left.parent = this;
				this.parent.right = this.right;
				this.right = this.parent;
			}
			this.parent.parent = this;
			this.parent = null;
		}
	}
}

module.exports = Node;

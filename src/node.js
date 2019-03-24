class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
			node.parent = this;
		}
		else if (this.right == null) {
			this.right = node;
			node.parent = this;
		}
		else return false;
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
			node.parent = null;
		}
		else if (this.right == node) {
			this.right = null;
			node.parent = null;
		}
		else {
			throw "error";
		}
	}

	remove() {
		if(this.parent != null) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent != null) {
			let parent = this.parent;
			let left = this.left;
			let right = this.right;
			
			if (parent.right === this) {
				this.right = parent;
				this.left = parent.left;
				if (this.left) {
					this.left.parent = this;
				}
			}
			
			if (parent.left === this) {
				this.left = parent;
				this.right = parent.right;
				if (this.right) {
					this.right.parent = this;
				}
			}
			
			this.parent = parent.parent;
			parent.parent = this;
			parent.left = left;
			parent.right = right;
			
			if (left != null) {
				left.parent = parent;
			}
			
			if (right != null) {
				right.parent = parent;
			}
			
			if (this.parent != null) {
				if (this.parent.left == parent) {
					this.parent.left = this;
				}
			
				if (this.parent.right == parent) {
					this.parent.right = this;
				}
			}
		}
	}
}

module.exports = Node;

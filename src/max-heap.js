const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.isEmpty() == false) {
			this.restoreRootFromLastInsertedNode(this.detachRoot());
			this.shiftNodeDown(this.root);
			return this.detachRoot().data;
		}
	}

	detachRoot() {
		let root = this.root;
		this.root = null;
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
	}

	isEmpty() {
		return (this.root == null);
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if(this.root == null){
			this.root = node;
			this.parentNodes.push(node);			
		}
		else {	
			const firstParent = this.parentNodes[0];
			firstParent.appendChild(node);
			this.parentNodes.push(node);

			if(firstParent.left && firstParent.right){
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;

/* class Mutex {
	locked
	constructor() {
		this.locked = false;
	}

	async acquire() {
		while (this.locked) {
			await new Promise(resolve => setTimeout(resolve, 10));
		}
		this.locked = true;
		return () => {
			this.locked = false;
		};
	}
} */

class Mutex {
	locked
	queue: any[]
	constructor() {
		this.locked = false;
		this.queue = [];
	}

	async acquire() {
		this.queue.push(new Promise<void>(resolve => {
			setTimeout(() => {
				if (this.locked) {
					// Wait for the lock to be released
					resolve();
				} else {
					// Acquire the lock
					this.locked = true;
					resolve();
				}
			}, 10);
		}));

		await this.queue[0];
		this.queue.shift();

		return () => {
			this.locked = false;
		};
	}
}

let data = [1, 2, 3];
let mutex = new Mutex();

async function processData() {
	let release = await mutex.acquire();
	try {
    // Perform some operations on the data array
    // ...
	} finally {
		release();
	}
}


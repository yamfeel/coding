export default class DepAD {
    id
    subs
    next
    synchronized
	constructor() {
		this.id = 0
		this.subs = []
		this.next = []
		this.synchronized = false
	}

	addOnce(cb) {
		if (this.synchronized) return this.next.push(cb)
		this.subs.push({ type: 'once', id: this.id++, cb })
	}

	addDep(cb) {
		if (this.synchronized) return this.next.push(cb)
		this.subs.push({ type: 'general', id: this.id++, cb })
	}

	notify() {
		this.synchronized = true

		const args = Array.from(arguments) 
		const subs = this.subs.slice()
		for (let i = 0; i < subs.length; i++) {
			subs[i].cb.apply(args[0], args.slice(1, args.length))

			/* if this sub is a once, remove it */
			if (subs[i].type === 'once') {
				const rmIndex = this.subs.findIndex(v => {
					return v.id === subs[i].id
				})
				this.subs.splice(rmIndex, 1)
			}
		}


		this.synchronized = false
		this.back()

		/* console.log('subs', this.subs) */
	}

	back() {
		if (this.synchronized) return

		if (this.next.length) {
			this.addOnce(this.next.shift())
			this.back()
		}
	}
}

const dep = new DepAD()

/* 添加依赖 */

/* 通知依赖|移除依赖|问题：移除依赖过程中造成依赖数组index混乱 */
/* 每次通知都会浅拷贝一次 */
/* 问题1：每次通知一次，要确保once只有一次，避免通知多次，once执行多次 */
/* 问题2：不加锁，多个异步执行多次once，notify也必须是等待列队，解决问题1 */

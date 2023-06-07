export class EventEmitter {
	constructor() {}
	/** @callback eventCallback*/
	/**
	 * @param {String} event
	 * @param {eventCallback} cb
	 */
	on(event, cb) {
		this[event] = { cb };
	}

	/** @param {String} event*/
	off(event) {
		delete this[event];
	}

	/**@param {String} event, @param {eventCallback} cb*/
	once(event, cb) {
		this[event] = { cb, once: true };
	}

	emit(event, ...args) {
		this[event].cb(...args);
		this[event].once && delete this[event];
	}
}


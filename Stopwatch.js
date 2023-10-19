function Stopwatch() {
	let startTime,
		endTime,
		running,
		duration = 0;

	this.start = function () {
		if (running) throw new Error("Watch is already started");

		running = true;
		startTime = new Date();
	};
	this.stop = function () {
		if (!running) throw new Error("Watch is not started");

		running = false;
		endTime = new Date();
		const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
		duration += seconds;
	};
	this.reset = function () {
		running = false;
		startTime = null;
		endTime = null;
		duration = 0;
	};

	//! DEFINE A READ ONLY PROPERTY
	Object.defineProperty(this, "duration", {
		get: function () {
			return duration;
		},
	});
}

const sw = new Stopwatch();
sw.start();
setTimeout(() => {
	sw.stop();
	console.log(sw.duration);
}, 4000);

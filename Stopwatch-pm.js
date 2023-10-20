/* PROTOTYPE MEMBERS ARENT ALWAYS A GREAT IDEA */

function Stopwatch() {
	let startTime,
		endTime,
		running,
		duration = 0;

	//! DEFINE A READ ONLY PROPERTY
	Object.defineProperty(this, "startTime", {
		get: function () {
			return startTime;
		},
	});
	Object.defineProperty(this, "endTime", {
		get: function () {
			return endTime;
		},
	});
	Object.defineProperty(this, "running", {
		get: function () {
			return running;
		},
	});
	Object.defineProperty(this, "duration", {
		get: function () {
			return duration;
		},
	});
}
Stopwatch.prototype.start = function () {
	if (this.running) throw new Error("Watch is already started");

	this.running = true;
	this.startTime = new Date();
};
Stopwatch.prototype.stop = function () {
	if (!this.running) throw new Error("Watch is not started");

	this.running = false;
	this.endTime = new Date();
	const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
	this.duration += seconds;
};
Stopwatch.prototype.reset = function () {
	this.running = false;
	this.startTime = null;
	this.endTime = null;
	this.duration = 0;
};

const sw = new Stopwatch();
sw.start();
setTimeout(() => {
	sw.stop();
	console.log(sw.duration);
}, 4000);

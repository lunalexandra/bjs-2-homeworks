class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some((item) => item.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			time,
			callback,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		if (this.intervalId) {
			return;
		}
		let checkClock = (item) => {
			if (item.time === this.getCurrentFormattedTime() && item.canCall) {
				item.canCall = false;
				item.callback();
			}
		};
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(checkClock);
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((item) => {
			item.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}
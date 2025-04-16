class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, func) {
    if (!time || !func) {
      throw new Error("Отсутсвуют обязательные аргументы");
    }

    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      time: time,
      callback: func,
      canCall: true
    });
  }

  removeClock(time) {
    this.alarmCollection =
      this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString(
      "ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    }
    );
  }

  start() {
    if (this.intervalId !== null) { return; }

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();

      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    for (let alarm of this.alarmCollection) {
      alarm.canCall = true;
    }
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
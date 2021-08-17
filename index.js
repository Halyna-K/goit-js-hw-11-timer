class CountdownTimer {
  constructor() {
    this.intervalId = null;
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
      targetDate: new Date("Aug 18, 2021"),
      selector: document.querySelector("#timer-1"),
    };
  }

  timerStart() {
    this.intervalId = setInterval(() => {
      this.currentDate = Date.now();
      const delta = this.refs.targetDate - this.currentDate;
      const deltaTime = this.timerComponent(delta);
      this.timerView(deltaTime);
    }, 1000);
  }

  timerView({ days, hours, mins, secs }) {
    this.refs.days.textContent = days < 10 ? `0${days}` : days;
    this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
    this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
    this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
  }

  timerComponent(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }

  timeFinish(delta) {
    if (delta <= 0) {
      clearInterval(this.intervalId);
      refs.selector.textContent = "Finish";
    }
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Dec 31, 2021"),
});

window.addEventListener("DOMContentLoaded", timer.timerStart());

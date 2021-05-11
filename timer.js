class CountdownTimer {
  constructor({ selector, targetDate }) {
    // this.selector = selector;
    this.targetDate = targetDate;
    this.dd = document.querySelector(`${selector} [data-value="days"]`);
    this.hh = document.querySelector(`${selector} [data-value="hours"]`);
    this.mm = document.querySelector(`${selector} [data-value="mins"]`);
    this.ss = document.querySelector(`${selector} [data-value="secs"]`);
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.updateClockFace(time);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  updateClockFace({ days, hours, mins, secs }) {
    this.dd.textContent = `${days}`;
    this.hh.textContent = `${hours}`;
    this.mm.textContent = `${mins}`;
    this.ss.textContent = `${secs}`;
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022"),
});

timer.start();

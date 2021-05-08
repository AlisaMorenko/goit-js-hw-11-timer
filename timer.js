const refs = {
  clockface: document.querySelector("#timer-1"),
  dd: document.querySelector('[data-value="days"]'),
  hh: document.querySelector('[data-value="hours"]'),
  mm: document.querySelector('[data-value="mins"]'),
  ss: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      updateClockface(time);
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
}

function updateClockface({ days, hours, mins, secs }) {
  refs.dd.textContent = `${days}`;
  refs.hh.textContent = `${hours}`;
  refs.mm.textContent = `${mins}`;
  refs.ss.textContent = `${secs}`;
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022"),
});

timer.start();

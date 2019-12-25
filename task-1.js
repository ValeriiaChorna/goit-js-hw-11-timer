class CountdownTimer {
  constructor(id, date) {
    this.id = id;
    this.targetDate = new Date(date);
    this.refsValues = {
      days: this.id.querySelector('[data-value="days"]'),
      hours: this.id.querySelector('[data-value="hours"]'),
      mins: this.id.querySelector('[data-value="mins"]'),
      secs: this.id.querySelector('[data-value="secs"]')
    };
  }
  calculateTime() {
    setInterval(() => {
      this.currentDate = new Date();
      let timeStr = this.targetDate - this.currentDate;
      return updateClockFace(this.refsValues, timeStr);
    }, 1000);
  }
}

//может засунуть эти функции в конструктор?
function updateClockFace(ref, time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  ref.days.textContent = days;
  ref.hours.textContent = hours;
  ref.mins.textContent = mins;
  ref.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

const timer1 = new CountdownTimer(
  document.querySelector("#timer-1"),
 "Jan 1, 2020"
);

timer1.calculateTime();
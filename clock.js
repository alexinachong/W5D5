class Clock {
  constructor() {
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();
    // setInterval(this._tick.bind(this), 1000);
    setInterval(() => this._tick(), 1000);
  }

  printTime() {
    let currentTime = `${this.hours} : ${this.minutes} : ${this.seconds}`;
    console.log(currentTime);
  }

  _tick() {
    this.seconds++;
    if (this.seconds > 59) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes > 59) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours > 23) {
      this.hours = 0;
    }
    this.printTime();
  }
}

const clock = new Clock();

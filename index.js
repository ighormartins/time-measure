class TimeMeasure {
  _measureTimers = {};
  _measures = {};

  start(key) {
    this._measureTimers[key] = process.hrtime();
  }

  stop(key) {
    if (!this._measureTimers[key]) {
      throw new Error(
        "Failed to stop: " +
          key +
          ". Cannot stop measuring a timer that wasn't previously started"
      );
    }

    if (!this._measures[key]) {
      this._measures[key] = 0;
    }

    let hrtime = process.hrtime(this._measureTimers[key]);
    this._measures[key] += hrtime[0] + hrtime[1] / 1e9;
    this._measureTimers[key] = null;
  }

  getMeasures() {
    return this._measures;
  }

  printMeasures() {
    Object.keys(this._measures).map((measure) => {
      console.log(measure, this._measures[measure].toFixed(3));
    });
  }
}

module.exports = new TimeMeasure();

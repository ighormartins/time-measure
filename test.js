const TimeMeasure = require("./index");

(async function test() {
  console.log("Testing");
  TimeMeasure.start("test1");
  TimeMeasure.start("test2");
  await new Promise((res) => setTimeout(res, 1000));
  TimeMeasure.stop("test1");
  await new Promise((res) => setTimeout(res, 1000));
  TimeMeasure.stop("test2");
  TimeMeasure.printMeasures();
})();

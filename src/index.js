//set up exports
module.exports = {
  measure_total
};
function measure_total(arr)
  {
    arr.reduce((prev, curr) => prev + curr);
  }

// set up functions to accept one parameter each
// formula to convert F to C is C = (f - 32) * (5/9)


const ftoc = function(fDeg) {
  let celcius = (fDeg - 32) * (5/9);
  const cRounded = Number(celcius.toFixed(1));
  return cRounded;
};

const ctof = function(cDeg) {
  let farenheight = (cDeg *(9/5)) + 32
  const fRounded = Number(farenheight.toFixed(1));
  return fRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

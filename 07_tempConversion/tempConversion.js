// set up functions to accept one parameter each
// formula to convert F to C is C = (f - 32) * (5/9)


const ftoc = function(fDeg) {
  let celcius = (fDeg - 32) * (5/9);
  const cRounded = Number(celcius.toFixed(1));
  return cRounded;
  /*if (cRounded === 0.0){
    return 0;
  } else {
    return cRounded;
  }*/
};

const ctof = function(cDeg) {
  let farenheight = (cDeg *(9/5)) + 32
  const fRounded = Number(farenheight.toFixed(1));
  return fRounded;
  /*if (fRounded === 32.0){  
    return 32;
  } else {
    return fRounded;
  }*/
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

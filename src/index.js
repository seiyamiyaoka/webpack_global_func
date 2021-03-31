import {addNum} from './add2'
const addNum1 = ( numOne = 2, numbTwo = 3 ) => {
 return numOne + numbTwo;
};

module.exports = {
  addNum,
  addNum1
}
// window.callMe = addNum
import {addNum} from './add2'
import {SetColorHandler} from './ColorHandler'
import {SetSizeHandler} from './SizeHandler'
const addNum1 = ( numOne = 2, numbTwo = 3 ) => {
 return numOne + numbTwo;
};

module.exports = {
  SetColorHandler,
  SetSizeHandler,
  addNum,
  addNum1
}
// window.callMe = addNum
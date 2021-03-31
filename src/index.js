import {addNum} from './add2'
import {SetColorHandler} from './ColorHandler'
import {SetSizeHandler, SetPositionHandler} from './SizeHandler'
const addNum1 = ( numOne = 2, numbTwo = 3 ) => {
 return numOne + numbTwo;
};

const run = () => {
  SetColorHandler("colors")
  SetSizeHandler("height")
  SetSizeHandler("width")
  SetPositionHandler("top")
  SetPositionHandler("right")
  SetPositionHandler("bottom")
  SetPositionHandler("left")
}

module.exports = {
  run
}
// window.callMe = addNum
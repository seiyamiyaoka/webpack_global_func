import {SetColorHandler} from './ColorHandler'
import {SetSizeHandler, SetPositionHandler} from './SizeHandler'

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
// if you want register global
// window.callMe = run
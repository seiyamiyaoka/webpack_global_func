const SetSizeHandler = (sourceId) => {
  const source = document.getElementById(sourceId);
  source.addEventListener('change', SizeHandler);
}

const SetPositionHandler = (sourceId) => {
  const source = document.getElementById(sourceId);
  let val = 0;
  source.addEventListener('click', PositionHandler, val);
}


const SizeHandler = (e) => {
  const targetElement = document.getElementById("displayArea")
  targetElement.style[e.target.id] = e.target.value + "px"
}

const PositionHandler = (e) => {
  const targetElement = document.getElementById("displayContent")

  const nextVal = +(e.target.value) + 1
  targetElement.style[e.target.id] = nextVal + "px"
  e.target.value = nextVal
}

export {
  SetSizeHandler,
  SetPositionHandler
}
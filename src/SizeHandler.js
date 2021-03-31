const SetSizeHandler = (sourceId) => {
  const source = document.getElementById(sourceId);
  source.addEventListener('input', SizeHandler);
}


const SizeHandler = (e) => {
  const targetElement = document.getElementById("displayArea")
  targetElement.style[e.target.id] = e.target.value + "px"
}

export {
  SetSizeHandler
}
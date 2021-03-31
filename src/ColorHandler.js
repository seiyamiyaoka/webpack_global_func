const SetColorHandler = (sourceId) => {
  const source = document.getElementById(sourceId);
  source.addEventListener('change', ColorHandler);
}


const ColorHandler = (e) => {
  const targetElement = document.getElementById("displayArea")
  targetElement.style.color = e.target.value
}

export {
 SetColorHandler
}
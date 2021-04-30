document.querySelector('#start').onclick = function () {
  if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        allStream = stream
        document.querySelector('#player').srcObject = stream
      })
      .catch((err) => {
        console.error(err)
      })
  } else {
    alert('Error')
  }
}

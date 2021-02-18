document.getElementById('click').addEventListener('click', randomNum)

let clicker = 0

function randomNum () {
  clicker = document.getElementById('table').value
  clicker = parseInt(clicker)

  if (clicker > 0) {
    document.getElementById('name').innerHTML = 'Positive'
  } else {
    document.getElementById('name').innerHTML = 'Negative'
  }
}

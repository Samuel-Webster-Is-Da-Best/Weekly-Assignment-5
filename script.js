// recieve input
document.getElementById('btn').addEventListener('click', calc)

function calc () {
  // recieve input value and save as var
  const diam = parseInt(document.getElementById('inp').value)
  // calculations
  const circ = 2 * Math.PI * (diam / 2)
  const area = Math.PI * (diam / 2) * (diam / 2)
  // return values
  document.getElementById('ans1').innerHTML = area
  document.getElementById('ans2').innerHTML = circ
}

document.getElementById('btn').addEventListener('click', calc)

function calc () {
  const diam = parseInt(document.getElementById('inp').value)
  const circ = 2 * Math.PI * (diam / 2)
  const area = Math.PI * (diam / 2) * (diam / 2)
  document.getElementById('ans1').innerHTML = area
  document.getElementById('ans2').innerHTML = circ
}

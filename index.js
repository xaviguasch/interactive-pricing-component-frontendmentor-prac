const checkBox = document.querySelector('.switch input')
const range = document.querySelector('#range')
let price = document.querySelector('#price')
let views = document.querySelector('#views')

const valueToViews = {
  1: 10,
  2: 50,
  3: 100,
  4: 150,
  5: 200,
}
const calculateAndRender = () => {
  views.textContent = valueToViews[range.value]

  const monthlyBilling = (valueToViews[range.value] * 0.16).toFixed(2)
  const yearlyBilling = parseFloat(monthlyBilling - monthlyBilling * 0.25).toFixed(2)

  if (!checkBox.checked) {
    price.textContent = monthlyBilling
  } else {
    price.textContent = yearlyBilling
  }

  fillTheBar(range.value)
}

const fillTheBar = (val) => {
  let percentage

  switch (Number(val)) {
    case 1:
      percentage = 0
      break
    case 2:
      percentage = 25
      break
    case 3:
      percentage = 50
      break
    case 4:
      percentage = 75
      break
    case 5:
      percentage = 100
      break
  }

  range.style.background = `linear-gradient(
    to right,
    var(--clr-soft-cyan) ${percentage}%,
    var(--clr-light-grayish-blue) ${percentage}%
  )`
}

calculateAndRender()

range.addEventListener('input', calculateAndRender)

checkBox.addEventListener('click', calculateAndRender)

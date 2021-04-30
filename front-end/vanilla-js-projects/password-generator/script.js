const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// console.log(randomFunc.lower)

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultEl.innerText

  if (!password) {
    return
  }

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  )
})


function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  )
  

  if (typesCount === 0) {
    return ''
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }
  console.log(generatedPassword)
  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword
}

// 24 + 97 = 121 => y
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}


// English alphabet letters: 26
// 25 + 65 = 90 => Z
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
// Number: 0 - 10, 10 numbers
// 1 + 48 => 2
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}



// Read more String.fromCharCode()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
// Convert a Unicode number into a character
// English alphabet letters: 26
// Greater than 97 return lowercase letter 
// Greater than 65 return uppercase letter
// Greater than 48 return number
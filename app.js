const amountRange = document.getElementById('range')
const amountNumber = document.getElementById('amountNumber')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const symbol = document.getElementById('symbol')
const form = document.getElementById('passwordGenerator')
const passwordDisplay = document.getElementById('display')

const uppercaseCode = arrayFromLowToHigh(65, 90)
const lowercaseCode = arrayFromLowToHigh(97, 122)
const numberCode = arrayFromLowToHigh(48, 57)
const symbolCode = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126))

amountNumber.addEventListener('input', syncAmount)
amountRange.addEventListener('input', syncAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterNumber = amountNumber.value
    const includeUppercase = uppercase.checked
    const includeLowercase = lowercase.checked
    const includeSymbols = symbol.checked

    const password = generatePassword(characterNumber, includeUppercase, includeLowercase, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterNumber, includeUppercase, includeLowercase, includeSymbols) {

    let charCode = lowercaseCode
    if (includeUppercase) charCode = charCode.concat(uppercaseCode)
    if (includeLowercase) charCode = charCode.concat(lowercaseCode)
    if (includeSymbols) charCode = charCode.concat(symbolCode)

    const passwordCharacters = []
    for (let i = 0; i < characterNumber; i++) {
        const characterCode = charCode[Math.floor(Math.random() * charCode.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncAmount(e) {
    const value = e.target.value
    amountNumber.value = value
    amountRange.value = value
}
const inputWidth = document.getElementById('input-width')
const inputHeight = document.getElementById('input-height')
const inputColor = document.getElementById('input-color')
const displayWidth = document.getElementById('display-width')
const displayHeight = document.getElementById('display-height')
const displayColor = document.getElementById('display-color')

const change = document.getElementById('change')

// Display Width
inputWidth.addEventListener('input', function (e) {
    displayWidth.innerHTML = inputWidth.value
})

// Display Height
inputHeight.addEventListener('input', function (e) {
    displayHeight.innerHTML = inputHeight.value
})

// Change Color
inputColor.addEventListener('input', function (e) {
    change.style.backgroundColor = inputColor.value
})

// Display Color Hex
inputColor.addEventListener('input', function (e) {
    document.getElementById("hex").innerHTML = inputColor.value
}, false)

// Change Width
inputWidth.addEventListener('input', function (e) {
    change.style.width = inputWidth.value + "px"
})

// Change Height
inputHeight.addEventListener('input', function (e) {
    change.style.height = inputHeight.value + "px"
})

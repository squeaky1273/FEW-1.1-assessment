const inputWidth = document.getElementById('input-width')
const inputHeight = document.getElementById('input-height')
const inputColor = document.getElementById('input-color')
const displayWidth = document.getElementById('display-width')
const displayHeight = document.getElementById('display-height')
const displayColor = document.getElementById('display-color')

const changeWidth = document.getElementById('change-width')
const changeHeight = document.getElementById('change-height')

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
    displayColor.style.color = inputColor.value
})

// Display Color Hex
inputColor.addEventListener('input', function (e) {
    document.getElementById("hex").innerHTML = inputColor.value
}, false)

// Change Width
inputWidth.addEventListener('input', function (e) {
    changeWidth.style.width = inputWidth.value + "px"
})

// Change Height
inputHeight.addEventListener('input', function (e) {
    changeHeight.style.height = inputHeight.value + "px"
})

// range.addEventListener('input', function() {
//     var newValue = this.value + "px";
//     item.style.fontSize = newValue;
//     current.innerHTML = newValue;
//   });

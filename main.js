const inputWidth = document.getElementById('input-width')
const inputHeight = document.getElementById('input-height')
const inputColor = document.getElementById('input-color')
const displayWidth = document.getElementById('display-width')
const displayHeight = document.getElementById('display-height')
const displayColor = document.getElementById('display-color')

const changeWidth = document.getElementById('change-width')
const changeHeight = document.getElementById('change-height')

// Display Width
inputWidth.addEventListener('change', function (e) {
    displayWidth.innerHTML = inputWidth.value
})

// Display Height
inputHeight.addEventListener('change', function (e) {
    displayHeight.innerHTML = inputHeight.value
})

// Change Color
inputColor.addEventListener('change', function (e) {
    displayColor.style.color = inputColor.value
})

// Display Color Hex
inputColor.addEventListener('input', function (e) {
    document.getElementById("hex").innerHTML = inputColor.value
}, false)

// Display Width
inputWidth.addEventListener('input', function (e) {
    changeWidth.style.width = inputWidth.value + "px"
})

// Display Height
inputHeight.addEventListener('input', function (e) {
    changeHeight.style.height = inputHeight.value + "px"
})


// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');

// ctx.strokeRect(0, 0, 100, 100);

// range.addEventListener('input', function() {
//     var newValue = this.value + "px";
//     item.style.fontSize = newValue;
//     current.innerHTML = newValue;
//   });

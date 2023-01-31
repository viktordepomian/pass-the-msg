const inputValue = document.getElementById('inputValue');
const outputValue = document.getElementById('outputValue');

inputValue.addEventListener("change", function() {
  localStorage.setItem("inputValue", inputValue.value);
  outputValue.innerHTML = localStorage.getItem("inputValue");
});

document.addEventListener("DOMContentLoaded", function() {
  const savedInputValue = localStorage.getItem("inputValue");
  if (savedInputValue) {
    inputValue.value = savedInputValue;
    outputValue.innerHTML = savedInputValue;
  }
});
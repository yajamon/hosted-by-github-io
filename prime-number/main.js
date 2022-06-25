const input = document.getElementById("in");
const result = document.getElementById("result");

input.addEventListener("change", () => {
  const value = Math.floor(parseInt(input.value, 10));
  if (isPrimeNumber(value)) {
    result.innerText = "素数です。";
  } else {
    result.innerText = "素数ではありません。";
  }
});

function isPrimeNumber(value) {
  if (value < 2) {
    return false;
  }
  let element = 2;
  while (element * element <= value) {
    if (value % element === 0) {
      return false;
    }
    element += 1;
  }
  return true;
}

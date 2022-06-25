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

/**
 * 素数判定スクリプト
 * @param {number} value 素数判定したい数値。0以上の整数を期待する。
 * @return {boolean} 素数であれば `true`。
 */
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

const cipher = document.getElementById("cipher-text");
const cipherText = cipher.innerText;
const cipherLength = cipher.innerText.length;
let cipherIndex = 0;
let interval;
let cipherIntervalOffset = 50;

/**
 *
 * @param {number} length
 */
function generateRandomString(length) {
  let result = "";
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = pool.length;
  let counter = 0;
  while (counter < length) {
    result += pool.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

window.addEventListener("load", () => {
  setTimeout(() => {
    interval = setInterval(() => {
      const revealed = cipherText.slice(0, cipherIndex);
      const random = generateRandomString(cipherLength - cipherIndex);
      cipher.innerText = revealed + random;
      cipherIndex++;
    }, cipherIntervalOffset);
  }, 500);
});

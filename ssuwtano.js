const node = document.getElementById("cipher-text");

let interval;

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

const playAnimation = (delay = 500, node = node) => {
  const nodeText = node.innerText;
  const nodeLength = node.innerText.length;
  let nodeIndex = 0;
  let intervalOffset = 50;

  setTimeout(() => {
    interval = setInterval(() => {
      const revealed = nodeText.slice(0, nodeIndex);
      const random = generateRandomString(nodeLength - nodeIndex);
      node.innerText = revealed + random;
      nodeIndex++;
    }, intervalOffset);
  }, delay);
};

window.addEventListener("load", () => {
  playAnimation(500);
});

node.addEventListener("mouseenter", () => {
  cipherIntervalOffset = 25;
  playAnimation(0);
});

const about = document.getElementById("about-text");

let observer = new IntersectionObserver(() => {
  playAnimation(0);
});

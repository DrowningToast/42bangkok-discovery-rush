const cipher = document.getElementById("cipher-text");

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

const playAnimation = (delay = 500, node = cipher, intervalOffset = 50) => {
  const nodeText = node.innerText;
  const nodeLength = node.innerText.length;
  let nodeIndex = 0; 

  setTimeout(() => {
    interval = setInterval(() => {
      const revealed = nodeText.slice(0, nodeIndex);
      const random = generateRandomString(nodeLength - nodeIndex);
      node.innerText = revealed + random;
      nodeIndex++;
    }, intervalOffset);
    setTimeout( () => {
      clearInterval(interval)
    }, (nodeLength + 1) * intervalOffset)
  }, delay);
};

const about = document.getElementById("about-text");

window.addEventListener("load", () => {
  const delay = 200
  playAnimation(delay);
  playAnimation(0, about, 10)
});


let observer = new IntersectionObserver(() => {
  playAnimation(0, about);
}, {
  root: about,
  rootMargin: "0px",
  threshold: 0.2,
});

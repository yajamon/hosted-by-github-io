function createNodesBy(text) {
  return text.split("\n").map((line) => document.createTextNode(line));
}
function put(text) {
  createNodesBy(text).forEach((current) => {
    target.appendChild(current);
    target.appendChild(document.createElement("BR"));
  });
}
function printWindowSize(event) {
  put(
    "EventType: " + event.type + " Width: " + window.innerWidth.toString() +
      " Height: " + window.innerHeight,
  );
}
const target = document.getElementById("print");
window.addEventListener("resize", printWindowSize);
window.addEventListener("orientationchange", printWindowSize);
put("リサイズしたり、端末を回転させたりすると情報が出力されます。");

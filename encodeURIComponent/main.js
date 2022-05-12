function derive(from, to, component) {
  to.value = component(from.value);
}
document.getElementById("encode").addEventListener("click", function () {
  derive(
    document.getElementById("raw"),
    document.getElementById("encoded"),
    encodeURIComponent,
  );
});
document.getElementById("decode").addEventListener("click", function () {
  derive(
    document.getElementById("encoded"),
    document.getElementById("raw"),
    decodeURIComponent,
  );
});

/**
 * @param {string} s
 * @return {string}
 */
const trimEndEachLine = (s) => {
    return s.split("\n")
        .map( (line) => line.trimEnd() )
        .join("\n");
}

/**
 * @param {string} s
 * @return {string}
 */
const swapAxis = (s) => {
    const sp = "　";
    const chars = s.split("\n").map((l) => l.split("")).reverse();
    const new_w = chars.length;
    const new_h = chars.reduce((max, line) => max < line.length ? line.length : max, 0);

    let graph = Array(new_h);
    for(let row = 0; row < new_h; row += 1) {
        graph[row] = Array(new_w);
        for(let col = 0; col < new_w; col += 1) {
            graph[row][col] = chars[col][row] || sp;
        }
    }

    return graph.map((l) => l.join("")).join("\n");
};

const convert_button = document.getElementById("convert_button");
convert_button.addEventListener("click", () => {
    const in_textarea = document.getElementById("in");
    const out_textarea = document.getElementById("out");

    let filters = [];
    filters.push(swapAxis);
    filters.push(trimEndEachLine);

    let filtered = filters.reduce((s, filter) => filter(s), in_textarea.value);
    out_textarea.value = filtered;
    console.log("convert");
});

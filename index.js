import * as d3 from "d3";

console.log("test");

let svg = d3.select("#map");
let circle = svg.selectAll("circle").data([10,20,30])
.enter().append("circle")
.style("fill", "steelblue")
.attr("cx", d=>d*10)
.attr("cy", 30)
.attr("r", d=>d)
;


console.log("after");

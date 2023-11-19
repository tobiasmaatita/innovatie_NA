table = d3.select('body').append('table').style("border-collapse", "collapse").style("border", "2px black solid");

const rows = [
    ['a', 'b', 'c'],
    [1, 2, 3],
    [4, 5, 6]
];

table.append("thead").append("tr")
.selectAll("th")
.data(rows[0])
.enter().append("th")
.text(function(d) {return d; })
.style("border", "1px black solid")
.style("padding", "5px")
.style("background-color", "lightgray")
.style("font-weight", "bold")
.style("text-transform", "uppercase");

table.append("tbody")
.selectAll("tr").data(rows.slice(1))
.enter().append("tr")
.selectAll("td")
.data(function(d){return d; })
.enter().append("td")
.style("border", "1px black solid")
.style("padding", "5px")
.style("background-color", "powderblue")
.on("mouseover", function(){
    d3.select(this).style("background-color", "darkblue")
    .style("color", "white");
})
.on("mouseout", function(){
    d3.select(this).style("background-color", "powderblue")
    .style("color", "black");
})
.text(function(d){return d; })
.style("font-size", "12px");

